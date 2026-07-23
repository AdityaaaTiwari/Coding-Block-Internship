import { useEffect, useState } from "react";

const StudentForm = ({ addStudent, editingStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    marks: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData({ name: "", email: "", course: "", marks: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course || formData.marks === "") {
      alert("Please fill all fields");
      return;
    }

    const marks = Number(formData.marks);
    if (marks < 0 || marks > 100) {
      alert("Marks should be between 0 and 100");
      return;
    }

    await addStudent({
      ...formData,
      marks,
    });

    setFormData({ name: "", email: "", course: "", marks: "" });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
      />

      <input
        type="number"
        name="marks"
        placeholder="Marks"
        value={formData.marks}
        onChange={handleChange}
      />

      <button type="submit">{editingStudent ? "Update Student" : "Add Student"}</button>
    </form>
  );
};

export default StudentForm;