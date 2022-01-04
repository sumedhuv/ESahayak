const Seller = require("../models/seller");

exports.getemail = async (req, res) => {
  let user;
  user = await Seller.findOne({ seller_email: req.body.seller_email });

  res.send(user._id);
};
