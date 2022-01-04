const bcrypt = require("bcrypt");
const Seller = require("../models/seller.js");

exports.register = async (req, res) => {
  let user = await Seller.findOne({ seller_email: req.body.seller_email });
  if (user) return res.status(400).json({ message: "User already registered" });
  user = await Seller.findOne({ seller_phone: req.body.seller_phone });
  if (user) return res.status(400).json({ message: "User already registered" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  user = new Seller(Obj);
  user.seller_image = (req.file && req.file.path) || "";
  // console.log(Obj);
  const salt = await bcrypt.genSalt(10);
  user.seller_password = await bcrypt.hash(req.body.seller_password, salt);
  user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(user);
};

exports.allusers = async (req, res) => {
  let user = await Seller.find();
  res.send(user);
};

exports.oneuser = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.id });
  res.send(user);
};

exports.update = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.id });
  if (!user) return res.status(400).json({ message: "User does not exist" });

  let seller_email = await Seller.findOne({
    seller_email: req.body.seller_email,
  });
  let seller_phone = await Seller.findOne({
    seller_phone: req.body.seller_phone,
  });
  let Obj = JSON.parse(JSON.stringify(req.body));

  if (seller_email)
    if (!(user.seller_email === seller_email.seller_email))
      return res.status(400).json({ message: "Phone Or email already exists" });
  if (seller_phone)
    if (!(user.seller_phone === seller_phone.seller_phone))
      return res.status(400).json({ message: "Phone Or email already exists" });

  if (req.body.seller_password) {
    const salt = await bcrypt.genSalt(10);
    Obj.seller_password = await bcrypt.hash(req.body.seller_password, salt);
  }

  let newObj = {
    ...Obj,
    seller_image: (req.file && req.file.path) || user.seller_image,
  };
  console.log(Obj);
  const updateUser = await Seller.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: newObj,
    }
  );
  res.status(200).json({ updates: updateUser });
};
