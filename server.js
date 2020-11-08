require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bookController = require("./controllers/bookController");

// Establishing port on 3001 so there's no conflict on 3000 with React
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// Mongoose Boilerplate Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(bookController);

//API Testing Route
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// HTML Get Route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Server Listening
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
