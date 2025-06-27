const URL = require("../models/url");
const { nanoid } = require("nanoid"); 


async function handleGenerateNewShortURL(req, res) {
  const { url, expiryDate } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortId = nanoid(6);

  await URL.create({
    shortId,
    redirectURL: url,
    expiryDate: expiryDate ? new Date(expiryDate) : undefined,
  });

  res.json({ shortId });
}


async function handleGetURLStats(req, res) {
  const { shortId } = req.params;

  const urlEntry = await URL.findOne({ shortId });

  if (!urlEntry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.json({
    shortcode: urlEntry.shortId,
    original_url: urlEntry.redirectURL,
    created_at: urlEntry.createdAt,
    expiry_date: urlEntry.expiryDate || null,
    total_clicks: urlEntry.visitHistory.length,
    click_data: urlEntry.visitHistory.map(entry => ({
      timestamp: entry.timestamp,
      referrer: entry.referrer || "unknown",
      location: entry.location || "unknown",
    })),
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetURLStats,
};
