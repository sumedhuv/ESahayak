const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const buySchema = new Schema(
  {
    buy_name: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    buy_price: {
      type: Number,
      required: [true, "price required"],
      trim: true,
    },
    buy_quantity: {
      type: Number,
      required: [true, "Quantity required"],
      trim: true,
    },
    buy_seller_name: {
      type: String,
      required: [true, "seller name required"],
      trim: true,
    },
    buy_email: {
      type: String,
      required: [true, "email required"],
      trim: true,
    },
    buy_upi: {
      type: String,
      required: [true, "upi required"],
      trim: true,
    },
    buy_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Buydetails = mongoose.model("Buydetails", buySchema);

module.exports = Buydetails;
