const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Buydetails = require("./buyproduct");

const Schema = mongoose.Schema;
require("dotenv").config();

const sellerSchema = new Schema(
  {
    seller_name: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    seller_email: {
      type: String,
      required: [true, "Email required"],
      trim: true,
    },
    seller_phone: {
      type: Number,
      required: [true, "Phone required"],
      trim: true,
    },
    seller_password: {
      type: String,
      required: [true, "Password required"],
      trim: true,
    },
    shop_address: {
      type: String,
      required: [true, "City required"],
      trim: true,
    },
    seller_upi: {
      type: String,
      required: [true, "upi required"],
      trim: true,
    },
    seller_image: {
      type: String,
    },
    buy_details: ["Buydetails"],
  },
  {
    timestamps: true,
  }
);
sellerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
    },
    process.env._jwtprivate
  );
  return token;
};

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
