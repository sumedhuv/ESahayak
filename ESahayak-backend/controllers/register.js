const bcrypt = require("bcrypt");
const Owner = require("../models/owner.js");

exports.register = async (req, res) => {
  let user = await Owner.findOne({ owner_email: req.body.owner_email });
  if (user) return res.status(400).json({ message: "User already registered" });
  user = await Owner.findOne({ owner_phone: req.body.owner_phone });
  if (user) return res.status(400).json({ message: "User already registered" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  user = new Owner(Obj);
  // console.log(Obj);
  user.owner_image = (req.file && req.file.path) || "";
  const salt = await bcrypt.genSalt(10);
  user.owner_password = await bcrypt.hash(req.body.owner_password, salt);
  user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(user);
};

exports.allusers = async (req, res) => {
  let user = await Owner.find();
  res.send(user);
};

exports.oneuser = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.id });
  res.send(user);
};

exports.update = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.id });
  if (!user) return res.status(400).json({ message: "User does not exist" });

  let owner_email = await Owner.findOne({ owner_email: req.body.owner_email });
  let owner_phone = await Owner.findOne({ owner_phone: req.body.owner_phone });
  let Obj = JSON.parse(JSON.stringify(req.body));
  if (owner_email)
    if (!(user.owner_email === owner_email.owner_email))
      return res.status(400).json({ message: "Phone Or email already exists" });
  if (owner_phone)
    if (!(user.owner_phone === owner_phone.owner_phone))
      return res.status(400).json({ message: "Phone Or email already exists" });

  if (req.body.owner_password) {
    const salt = await bcrypt.genSalt(10);
    Obj.owner_password = await bcrypt.hash(req.body.owner_password, salt);
  }

  let newObj = {
    ...Obj,
    owner_image: (req.file && req.file.path) || user.owner_image,
  };

  const updateUser = await Owner.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: newObj,
    }
  );
  res.status(200).json({ updates: updateUser });
};
