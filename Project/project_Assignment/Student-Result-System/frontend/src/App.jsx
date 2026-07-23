import { useEffect, useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm.jsx";
import StudentTable from "./components/StudentTable.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Stats from "./components/Stats.jsx";
import API from "./services/api.js";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadStudents = async (query = "") => {
    try {
      setLoading(true);
      const { data } = query
        ? await API.get("/search", { params: { name: query } })
        : await API.get("/");
      setStudents(data);
      setError("");
    } catch (err) {
      setError("Unable to load students from the server.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        loadStudents(search);
      } else {
        loadStudents();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const addStudent = async (student) => {
    try {
      setError("");
      if (editingStudent) {
        const { data } = await API.put(`/${editingStudent._id}`, student);
        setStudents((prev) =>
          prev.map((item) =>
            String(item._id) === String(editingStudent._id) ? data : item
          )
        );
        setEditingStudent(null);
      } else {
        const { data } = await API.post("/", student);
        setStudents((prev) => [...prev, data]);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete Student?")) return;

    try {
      await API.delete(`/${id}`);
      setStudents((prev) => prev.filter((student) => String(student._id) !== String(id)));
      if (editingStudent && String(editingStudent._id) === String(id)) {
        setEditingStudent(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Unable to delete student");
    }
  };

  const filteredStudents = students;

  return (
    <div className="container">
      <h1>Student Result Management System</h1>

      <Stats students={students} />
      <SearchBar search={search} setSearch={setSearch} />

      {error && <p className="error-message">{error}</p>}

      <StudentForm addStudent={addStudent} editingStudent={editingStudent} />

      {loading ? (
        <p className="loading-text">Loading students...</p>
      ) : (
        <StudentTable
          students={filteredStudents}
          deleteStudent={deleteStudent}
          setEditingStudent={setEditingStudent}
        />
      )}
    </div>
  );
}

export default App;