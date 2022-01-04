const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    pdt_name: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    pdt_remaining_stock: {
      type: Number,
      required: [true, "Remaining stock required"],
      trim: true,
    },
    pdt_bought_price: {
      type: Number,
      required: [true, "Price required"],
      trim: true,
    },
    pdt_current_price: {
      type: Number,
      required: [true, "Price required"],
      trim: true,
    },
    pdt_profit: {
      type: Number,
      trim: true,
    },
    pdt_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pdtdetails = mongoose.model("Pdtdetails", productSchema);

module.exports = Pdtdetails;
