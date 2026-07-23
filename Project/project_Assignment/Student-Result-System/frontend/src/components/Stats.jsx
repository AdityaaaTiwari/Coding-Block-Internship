const Stats = ({ students }) => {
  const totalStudents = students.length;

  const passedStudents = students.filter(
    (student) => student.marks >= 40
  ).length;

  const failedStudents = students.filter(
    (student) => student.marks < 40
  ).length;

  const averageMarks =
    totalStudents === 0
      ? 0
      : (
          students.reduce((sum, student) => sum + student.marks, 0) /
          totalStudents
        ).toFixed(2);

  return (
    <div className="stats-container">
      <div className="card">
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>

      <div className="card">
        <h3>Passed</h3>
        <p>{passedStudents}</p>
      </div>

      <div className="card">
        <h3>Failed</h3>
        <p>{failedStudents}</p>
      </div>

      <div className="card">
        <h3>Average Marks</h3>
        <p>{averageMarks}</p>
      </div>
    </div>
  );
};

export default Stats;