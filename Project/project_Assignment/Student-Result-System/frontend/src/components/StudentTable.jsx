const StudentTable = ({ students, deleteStudent, setEditingStudent }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Marks</th>
          <th>Result</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No Students Found
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
              <td>
                <span
                  style={{
                    color: student.marks >= 40 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {student.marks >= 40 ? "Pass" : "Fail"}
                </span>
              </td>
              <td>
                <button className="edit-btn" onClick={() => setEditingStudent(student)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteStudent(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;