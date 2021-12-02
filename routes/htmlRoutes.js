const path = require("path");
const router = require("express").Router();

// Homepage routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/stats.html"));
});

module.exports = router;
