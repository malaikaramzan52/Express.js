import express from 'express';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads'); // folder must exist
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // <-- Correct!
    }
});

// Configure Multer
const upload = multer({ storage });

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <br><br>
            <button type="submit">Upload File</button>
        </form>
    `);
});

// Upload Route
app.post("/upload", upload.single("myfile"), (req, res) => {
    console.log("Uploaded file:", req.file);

    res.send({
        message: "File uploaded successfully",
        fileInfo: req.file
    });
});

// Server Listener
app.listen(3200, () => {
    console.log("Server running on port 3200");
});
