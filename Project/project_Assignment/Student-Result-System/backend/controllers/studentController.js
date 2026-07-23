const mongoose = require("mongoose");
const Student = require("../models/Student");

let memoryStudents = [];
let nextMemoryId = 1;

const isDbReady = () => mongoose.connection.readyState === 1;

const normalizeStudent = (body) => ({
  name: typeof body.name === "string" ? body.name.trim() : "",
  email: typeof body.email === "string" ? body.email.trim().toLowerCase() : "",
  course: typeof body.course === "string" ? body.course.trim() : "",
  marks: Number(body.marks),
});

const validateStudent = (student) => {
  if (!student.name) return "Name is required";
  if (!student.email) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
    return "Email is invalid";
  }
  if (!student.course) return "Course is required";
  if (Number.isNaN(student.marks) || student.marks < 0 || student.marks > 100) {
    return "Marks must be between 0 and 100";
  }
  return null;
};

exports.getStudents = async (req, res) => {
  try {
    if (isDbReady()) {
      const students = await Student.find().sort({ createdAt: -1 });
      return res.json(students);
    }

    return res.json(memoryStudents);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const studentData = normalizeStudent(req.body);
    const validationError = validateStudent(studentData);

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    if (isDbReady()) {
      const existingStudent = await Student.findOne({ email: studentData.email });
      if (existingStudent) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const student = await Student.create(studentData);
      return res.status(201).json(student);
    }

    const existingMemoryStudent = memoryStudents.find(
      (student) => student.email === studentData.email
    );
    if (existingMemoryStudent) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const student = { _id: String(nextMemoryId++), ...studentData };
    memoryStudents.unshift(student);
    return res.status(201).json(student);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const studentData = normalizeStudent(req.body);
    const validationError = validateStudent(studentData);

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    if (isDbReady()) {
      const existingStudent = await Student.findOne({
        email: studentData.email,
        _id: { $ne: req.params.id },
      });

      if (existingStudent) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const student = await Student.findByIdAndUpdate(req.params.id, studentData, {
        new: true,
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.json(student);
    }

    const studentIndex = memoryStudents.findIndex(
      (student) => String(student._id) === String(req.params.id)
    );

    if (studentIndex === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    const duplicate = memoryStudents.find(
      (student) =>
        String(student._id) !== String(req.params.id) &&
        student.email === studentData.email
    );
    if (duplicate) {
      return res.status(400).json({ message: "Email already exists" });
    }

    memoryStudents[studentIndex] = {
      ...memoryStudents[studentIndex],
      ...studentData,
    };
    return res.json(memoryStudents[studentIndex]);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    if (isDbReady()) {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      return res.json({ message: "Deleted Successfully" });
    }

    const studentIndex = memoryStudents.findIndex(
      (student) => String(student._id) === String(req.params.id)
    );
    if (studentIndex === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    memoryStudents.splice(studentIndex, 1);
    return res.json({ message: "Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.searchStudent = async (req, res) => {
  try {
    const query = req.query.name ? req.query.name.trim() : "";

    if (isDbReady()) {
      const students = await Student.find({
        name: { $regex: query, $options: "i" },
      }).sort({ createdAt: -1 });
      return res.json(students);
    }

    const students = memoryStudents.filter((student) =>
      student.name.toLowerCase().includes(query.toLowerCase())
    );
    return res.json(students);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};