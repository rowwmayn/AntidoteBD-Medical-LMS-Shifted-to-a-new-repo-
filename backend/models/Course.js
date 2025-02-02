import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const courseSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 }, // Unique auto-generated ID
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Store image URL
  price: { type: Number, required: true },
  discountedPrice: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
