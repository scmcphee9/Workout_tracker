// build express server
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// routes
app.use(require("./routes/html-route.js"));
app.use(require("./routes/api-route.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
