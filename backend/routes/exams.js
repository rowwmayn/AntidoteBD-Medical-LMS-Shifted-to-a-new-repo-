import express from "express";
import Exam from "../models/Exam.js";

const router = express.Router();

// GET all exams
router.get("/", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single exam by id
router.get("/:id", async (req, res) => {
  try {
    const exam = await Exam.findOne({ id: req.params.id });
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new exam
router.post("/", async (req, res) => {
  const exam = new Exam(req.body);
  try {
    const savedExam = await exam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update an exam
router.put("/:id", async (req, res) => {
  try {
    const exam = await Exam.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json(exam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an exam
router.delete("/:id", async (req, res) => {
  try {
    const exam = await Exam.findOneAndDelete({ id: req.params.id });
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json({ message: "Exam deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
