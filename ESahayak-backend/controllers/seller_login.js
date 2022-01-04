const bcrypt = require("bcrypt");
const Seller = require("../models/seller");

exports.login = async (req, res) => {
  let user;
  if (req.body.seller_email) {
    user = await Seller.findOne({ seller_email: req.body.seller_email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
  } else if (req.body.seller_phone) {
    user = await Seller.findOne({ seller_phone: req.body.seller_phone });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
  } else {
    return res.status(400).json({ message: "Provide all Required fields" });
  }

  const validpass = await bcrypt.compare(
    req.body.seller_password,
    user.seller_password
  );
  if (!validpass)
    return res.status(400).json({ message: "Invalid Credentials" });

  const token = user.generateAuthToken();
  res.send(token);
};
