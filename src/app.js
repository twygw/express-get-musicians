const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians
app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  res.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  const id = req.params.id;
  const musicians = await Musician.findByPk(id);
  res.json(musicians);
});
app.post("/musicians", async (req, res) => {
  const newMusican = await Musician.create(req.body);
  res.json(newMusican);
});
module.exports = app;
