const express = require("express");
const router = express.Router();

router.use("/musicians", (req, res, next) => {
  next();
});
router.set("json spaces", 2);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  res.json(musicians);
});

router.get("/musicians/:id", async (req, res) => {
  const id = req.params.id;
  const musicians = await Musician.findByPk(id);
  res.json(musicians);
});
router.post("/musicians", async (req, res) => {
  const newMusican = await Musician.create(req.body);
  res.json(newMusican);
});

module.exports = router;
