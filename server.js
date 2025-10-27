import express from "express";
import cors from "cors";
import multer from "multer";
import { nanoid } from "nanoid";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ Ekta Cricket AVPL Live Server Running Successfully!");
});

// File upload setup (optional)
const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, nanoid() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Example route for uploading files
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
