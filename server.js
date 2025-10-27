import express from "express";
import cors from "cors";
import multer from "multer";
import { nanoid } from "nanoid";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Simple storage for uploads
const upload = multer({ dest: "public/uploads/" });

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// Example: add match
app.post("/api/match", upload.none(), (req, res) => {
  const data = req.body;
  console.log("Match received:", data);
  res.json({ success: true, id: nanoid() });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
