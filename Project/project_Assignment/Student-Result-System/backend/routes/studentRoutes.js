const express = require("express");

const router = express.Router();

const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudent,
} = require("../controllers/studentController");

router.get("/", getStudents);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

router.get("/search", searchStudent);

module.exports = router;