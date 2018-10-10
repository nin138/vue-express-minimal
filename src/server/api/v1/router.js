const router = require("express").Router();

router.get("/time", (req, res) => {
  res.json({ time: new Date() });
});

module.exports = router;
