import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return;
    }

    const hashedPassword = await bcrypt.hash("your-secure-password", 10); // Change password before running
    const adminUser = new User({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      facebookId: "https://facebook.com/admin",
      institute: "Admin Institute",
      roll: "0001",
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error creating admin:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
