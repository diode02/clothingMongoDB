const mongoose = require("mongoose");
const { itemSchema } = require("../items/items.models");

const collectionSchema = mongoose.Schema(
  {
    discription: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    imageUrl: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    routeName: {
      type: String,
      //   required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

collectionSchema.virtual("items", {
  ref: "Items",
  localField: "_id",
  foreignField: "itemType",
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
