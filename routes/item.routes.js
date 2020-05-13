var express = require("express");
const Collection = require("../src/models/collection/collection.models");

const { Item } = require("../src/models/items/items.models");
const auth = require("../src/middlewares/auth");
var router = express.Router();

router.get("/getAll", async (req, res, next) => {
  try {
    const data = await Item.find();
    if (!data) return res.status(404).send("not found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/newItem/:type", async (req, res, next) => {
  try {
    const collection = await Collection.findOne({
      type: req.params.type.toLowerCase(),
    });
    if (!collection) return res.status(404).send("not found");

    const item = new Item({
      ...req.body,
      itemType: collection._id,
    });

    const data = await item.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/newItemsListAdd/:type", async (req, res) => {
  try {
    const collection = await Collection.findOne({
      type: req.params.type.toLowerCase(),
    });
    if (!collection) return res.status(404).send("not found");

    items.map(async (item) => {
      item["quantity"] = getRandomInt(4, 30);
      console.log(item);

      try {
        const itemMD = new Item({
          ...item,
          itemType: collection._id,
        });

        await itemMD.save();
      } catch (error) {
        console.log("error inside");
      }
    });
    res.status(201).send("added");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/getAll/:type", async (req, res, next) => {
  const match = {};
  const sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split("_");
    sort[parts[0]] = parts[1] === "asc" ? 1 : -1;
  }

  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  try {
    const collection = await Collection.findOne({
      type: req.params.type.toLowerCase(),
    });
    await collection
      .populate({
        path: "items",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.status(200).send(collection.items);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const updates = Object.keys(req.body);
  try {
    const item = await Item.findOne({
      _id: req.params.id,
    });
    if (!item) return res.status(404).send("no item found for requested id");

    updates.forEach((update) => (item[update] = req.body[update]));
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Item.findOneAndDelete({
      id: req.params.id,
    });
    if (!data) return res.status(404).send("no data found");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
