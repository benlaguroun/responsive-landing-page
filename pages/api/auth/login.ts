// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"; // For password hashing (make sure passwords are stored securely)
import jwt from "jsonwebtoken"; // For JWT token generation

// Replace this with actual user data or fetch from a database
const users = [
  {
    email: "user@example.com",
    password: "$2b$10$ZHR7q5uS4bA3LgD1f1fOeu7vnMwFuR3QlN8BISBL8mM2O4.x3T8xq",
  }, // Hashed password example
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  // Check if the user exists in the database (replace with real database query)
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token (replace "your_jwt_secret" with your actual secret)
  const token = jwt.sign({ email: user.email }, "your_jwt_secret", {
    expiresIn: "1h", // Optional: adjust expiration time as needed
  });

  // Respond with the token
  return res.status(200).json({ token });
}
