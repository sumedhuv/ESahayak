const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Staff = require("./staff");
const Pdtdetails = require("./product");

const Schema = mongoose.Schema;
require("dotenv").config();

const ownerSchema = new Schema(
  {
    owner_name: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    owner_email: {
      type: String,
      required: [true, "Email required"],
      trim: true,
    },
    owner_phone: {
      type: Number,
      required: [true, "Phone required"],
      trim: true,
    },
    owner_password: {
      type: String,
      required: [true, "Password required"],
      trim: true,
    },
    shop_address: {
      type: String,
      required: [true, "City required"],
      trim: true,
    },
    owner_upi: {
      type: String,
      trim: true,
    },
    owner_image: {
      type: String,
    },
    staff: ["Staff"],
    product: ["Pdtdetails"],
  },
  {
    timestamps: true,
  }
);
ownerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
    },
    process.env._jwtprivate
  );
  return token;
};

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
