const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    itemType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
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
    id: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// taskSchemaNew.pre("save", async function(next) {
//   next();
// });

const Item = mongoose.model("Items", itemSchema);

module.exports = { Item, itemSchema };
