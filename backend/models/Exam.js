import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const examSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 }, // Unique auto-generated ID
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  createdAt: { type: Date, default: Date.now },
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
