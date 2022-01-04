const Pdtdetails = require("../models/product.js");
const Owner = require("../models/owner");

exports.addpdt = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  let pdt = new Pdtdetails(Obj);
  pdt.pdt_profit = Obj.pdt_current_price - Obj.pdt_bought_price;
  pdt.pdt_image = req.body.pdt_image;
  user.product.push(pdt);
  user.save();
  res.send(pdt);
};

exports.allpdts = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  res.send(user.product);
};

exports.onepdt = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  user.product.forEach((item) => {
    if (item._id == req.params.id) res.send(item);
  });
};

exports.updatepdt = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  let pdtdata;
  user.product.forEach((item) => {
    if (item._id == req.params.id) pdtdata = item;
  });

  if (!pdtdata)
    return res.status(400).json({ message: "Product does not exist" });

  pdtdata.pdt_name = req.body.pdt_name || pdtdata.pdt_name;
  pdtdata.pdt_remaining_stock =
    req.body.pdt_remaining_stock || pdtdata.pdt_remaining_stock;
  pdtdata.pdt_bought_price =
    req.body.pdt_bought_price || pdtdata.pdt_bought_price;
  pdtdata.pdt_current_price =
    req.body.pdt_current_price || pdtdata.pdt_current_price;
  pdtdata.pdt_image = (req.file && req.file.path) || pdtdata.pdt_image;

  let new_profit =
    (req.body.pdt_current_price || pdtdata.pdt_current_price) -
    (req.body.pdt_bought_price || pdtdata.pdt_bought_price);
  pdtdata.pdt_profit = new_profit;

  user.product.push(pdtdata);
  const index = user.product.indexOf(pdtdata);
  user.product.splice(index, 1);
  user.save();
  res.send(user.product);
};
