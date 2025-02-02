import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose"; // Add this line
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Fix for ES module path issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the correct location
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging: Check if it's loading correctly

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    const adminUser = new User({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      facebookId: process.env.ADMIN_FACEBOOK_ID,
      institute: process.env.ADMIN_INSTITUTE,
      roll: process.env.ADMIN_ROLL,
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

createAdmin();