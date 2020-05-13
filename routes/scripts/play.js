const Collection = require("../../src/models/collection/collection.models");
const { Item } = require("../../src/models/items/items.models");

const items = [
  {
    id: 1,
    title: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
  },
  {
    id: 2,
    title: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
  },
  {
    id: 3,
    title: "Brown Cowboy",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
  },
  {
    id: 4,
    title: "Grey Brim",
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    price: 25,
  },
  {
    id: 5,
    title: "Green Beanie",
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    price: 18,
  },
  {
    id: 6,
    title: "Palm Tree Cap",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    price: 14,
  },
  {
    id: 7,
    title: "Red Beanie",
    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
    price: 18,
  },
  {
    id: 8,
    title: "Wolf Cap",
    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    price: 14,
  },
  {
    id: 9,
    title: "Blue Snapback",
    imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
    price: 16,
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

items.map((item) => {
  item["quantiy"] = getRandomInt(4,30);
  console.log(item);
  try {
    const item = new Item({
      ...req.body,
      itemType: collection._id,
    });

    const data = await item.save();
    res.status(201).send(data);
  } catch (error) {
  }
});
