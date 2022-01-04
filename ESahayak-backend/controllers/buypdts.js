const Seller = require("../models/seller");

exports.allpdts = async (req, res) => {
  let user = await Seller.find();
  let allpdts = [];

  user.forEach((u) => {
    u.buy_details.forEach((item) => {
      allpdts.push(item);
    });
  });

  res.send(allpdts);
};
