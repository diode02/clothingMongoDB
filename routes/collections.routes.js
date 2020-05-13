var express = require("express");
const Collection = require("../src/models/collection/collection.models");
const auth = require("../src/middlewares/auth");
var router = express.Router();

router.get("/:type", async (req, res, next) => {
  try {
    const data = await Collection.findOne({
      type: req.params.type.toLowerCase(),
    });
    if (!data) return res.status(404).send("not found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/getAll", async (req, res, next) => {
  try {
    const data = await Collection.find();
    if (!data) return res.status(404).send("not found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/newCollection", async (req, res, next) => {
  const collection = new Collection({
    ...req.body,
    // owner: req.user._id,
  });
  try {
    const data = await collection.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:type", async (req, res, next) => {
  const updates = Object.keys(req.body);
  try {
    const collection = await Collection.findOne({
      type: req.params.type,
    });
    if (!collection)
      return res.status(404).send("no task found for requested id");

    updates.forEach((update) => (collection[update] = req.body[update]));
    await collection.save();
    res.send(collection);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:type", async (req, res, next) => {
  try {
    const data = await Collection.findOneAndDelete({
      type: req.params.type,
    });
    if (!data) return res.status(404).send("no data found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
