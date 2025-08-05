import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signupUser = async (req, res) => {
  console.log("Signup request received:", req.body); // ✅ Debug log

  try {
    const { username, email, password } = req.body;

    // ✅ Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

     const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();

  // ✅ Debug line – check if the secret is loaded correctly
  console.log("JWT secret used:", process.env.JWT_SECRET);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({ user, token });
} catch (err) {
  res.status(500).json({ message: "Something went wrong", error: err });
}
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, "jwtsecret", {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
