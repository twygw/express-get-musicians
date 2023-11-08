const express = require("express");
const router = express.Router();

router.use("/musicians", (req, res, next) => {
  next();
});

module.exports = router;
