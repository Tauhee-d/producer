const express = require("express");
const router = express.Router();
require("../db/connection");
// require("../db/connection");
const User = require("../models/usermodel");

router.get("/", (req, res) => {
  res.send("user");
});

router.post("/table", async (req, res) => {
  const { id, battery , temperature } = req.body;
  if (!id || !battery || !temperature ) {
    return res.status(422).json({ error: "fields requitred" });
  }
  try {
    const idExits = await User.findOne({ id: id });
    if (idExits) {
      return res.status(422).json({ error: "id is already exists" });
    }
    const table = new User(req.body);
    const tableData = await table.save();
    if (tableData) {
      res.status(201).json({ message: " successful" });
    } else {
      res.status(500).json({ error: "failed to upload" });
    }
    req.io.emit("table", { content: req.body.content });

  } catch (error) {
    console.log(error);
  }
});

router.get("/table", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

module.exports = router;
