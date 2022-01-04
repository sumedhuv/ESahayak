const Pdtdetails = require("../models/buyproduct.js");
const Seller = require("../models/seller");

exports.addpdt = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.s_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  let pdt = new Pdtdetails(Obj);
  pdt.buy_image = (req.file && req.file.path) || "";
  pdt.buy_seller_name = user.seller_name;
  pdt.buy_email = user.seller_email;
  pdt.buy_upi = user.seller_upi;
  user.buy_details.push(pdt);
  user.save();
  res.send(pdt);
};

exports.allpdts = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.s_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  res.send(user.buy_details);
};

exports.onepdt = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.s_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  user.buy_details.forEach((item) => {
    if (item._id == req.params.id) res.send(item);
  });
};

exports.updatepdt = async (req, res) => {
  let user = await Seller.findOne({ _id: req.params.s_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  let pdtdata;
  user.buy_details.forEach((item) => {
    if (item._id == req.params.id) pdtdata = item;
  });

  if (!pdtdata)
    return res.status(400).json({ message: "Product does not exist" });

  pdtdata.buy_name = req.body.buy_name || pdtdata.buy_name;
  pdtdata.buy_price = req.body.buy_price || pdtdata.buy_price;
  pdtdata.buy_quantity = req.body.buy_quantity || pdtdata.buy_quantity;
  pdtdata.buy_image = (req.file && req.file.path) || pdtdata.buy_image;

  user.buy_details.push(pdtdata);
  const index = user.buy_details.indexOf(pdtdata);
  user.buy_details.splice(index, 1);
  user.save();
  res.send(user.buy_details);
};
