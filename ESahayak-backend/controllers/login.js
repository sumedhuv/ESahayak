const bcrypt = require("bcrypt");
const Owner = require("../models/owner");

exports.login = async (req, res) => {
  let user;
  if (req.body.owner_email) {
    user = await Owner.findOne({ owner_email: req.body.owner_email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
  } else if (req.body.owner_phone) {
    user = await Owner.findOne({ owner_phone: req.body.owner_phone });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
  } else {
    return res.status(400).json({ message: "Provide all Required fields" });
  }

  const validpass = await bcrypt.compare(
    req.body.owner_password,
    user.owner_password
  );
  if (!validpass)
    return res.status(400).json({ message: "Invalid Credentials" });

  const token = user.generateAuthToken();
  res.send(token);
};
