// index.js is an express server that will serve the static files from the build folder
import { connect } from "./db.js";
import express from "express";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/notes.js";
import cors from "cors";
connect();
// app is an instance of express which is a function that returns an object used to configure and start up the server
const app = express();
const port = 5000;
app.use(cors()); // Fix: Invoke cors function
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Available routes
app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

app.listen(port, () => {
  console.log(`Note Book  listening on port ${port}`);
});
