const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes"));

app.listen(PORT, function () {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
