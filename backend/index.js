// index.js is an express server that will serve the static files from the build folder
import { connect } from "./db.js";
import express from "express";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/notes.js";

connect();
// app is an instance of express which is a function that returns an object used to configure and start up the server
const app = express();
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Available routes
app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
