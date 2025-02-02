import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 }, // Unique auto-generated ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  facebookId: { type: String, required: true }, // Mandatory Facebook Profile Link
  institute: { type: String, required: true }, // Mandatory Educational Institute Name
  roll: { type: String, required: true }, // Mandatory Roll Number
  role: { type: String, enum: ["student", "admin"], default: "student" }, // Default role is 'student'
  createdAt: { type: Date, default: Date.now },
});

// Prevent multiple admins
userSchema.pre("save", async function (next) {
  if (this.role === "admin") {
    const adminExists = await mongoose.model("User").findOne({ role: "admin" });
    if (adminExists) {
      throw new Error("An admin already exists!");
    }
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
