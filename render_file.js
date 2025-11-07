import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Create __dirname manually (since ES modules don’t have it)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home route
app.get("/", (req, resp) => {
    const absPath = path.resolve("View/home.html"); // Converts to absolute path
    console.log(absPath);
    resp.sendFile(absPath); // ✅ correct
});

// Login route
app.get("/login", (req, resp) => {   // ✅ parentheses fixed
    const absPath = path.resolve("View/login.html"); // ✅ correct folder name
    resp.sendFile(absPath);                          // ✅ correct spelling
});

// About route
app.get("/about", (req, resp) => {   // ✅ parentheses fixed
    const absPath = path.resolve("View/about.html"); // ✅ correct file
    resp.sendFile(absPath);                          // ✅ correct spelling
});

app.listen(3200);
