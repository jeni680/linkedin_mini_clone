import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTA3Y2NlNTY3ZDMzMDBkOWJlYjZmOSIsImlhdCI6MTc1NDMzMjk2MiwiZXhwIjoxNzU0MzM2NTYyfQ._O-BFVQtA3LkXYTUABuuXtp-RpX9C2WD7XkLIJMMnnU"; // paste your JWT token

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("✅ Token is valid:", decoded);
} catch (err) {
  console.log("❌ Token verification failed:", err.message);
}
