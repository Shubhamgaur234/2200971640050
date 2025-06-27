const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetURLStats,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId/stats", handleGetURLStats);

module.exports = router;
