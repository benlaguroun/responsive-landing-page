import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  email: string;
  password: string;
}

const users: User[] = [
  {
    email: "user@example.com",
    password: "$2b$10$w3t5FqVbcgN1rDklkpHzU9rmVSl3Gl5F3nAqC/jm7FDuqlw.svHpi", // Example hashed password
  },
];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if the user already exists
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password and save the user to the "database"
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser: User = { email, password: hashedPassword };

    // Add the new user to the array (or save it to a real database)
    users.push(newUser);

    return res.status(201).json({ message: "User created successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
