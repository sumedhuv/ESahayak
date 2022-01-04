const Staff = require("../models/staff.js");
const Owner = require("../models/owner");

exports.addstaff = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  let valid = 1;
  user.staff.forEach((item) => {
    if (item.staff_phone == req.body.staff_phone) {
      valid = 0;
      return;
    }
  });
  if (valid == 0)
    return res.status(400).json({ message: "Phone number already exists" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  new_staff = new Staff(Obj);
  new_staff.staff_image = (req.file && req.file.path) || "";
  user.staff.push(new_staff);
  user.save();
  res.send(user);
};

exports.allstaff = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  res.send(user.staff);
};

exports.oneuser = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  user.staff.forEach((item) => {
    if (item._id == req.params.id) res.send(item);
  });
};

exports.updateone = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  let staffdata;
  user.staff.forEach((item) => {
    if (item._id == req.params.id) staffdata = item;
  });

  if (!staffdata)
    return res.status(400).json({ message: "Staff does not exist" });

  let valid = 1;
  user.staff.forEach((item) => {
    if (item != staffdata && item.staff_phone == req.body.staff_phone) {
      valid = 0;
      return;
    }
  });
  if (valid == 0)
    return res.status(400).json({ message: "Phone number already exists" });

  staffdata.staff_name = req.body.staff_name || staffdata.staff_name;
  staffdata.staff_phone = req.body.staff_phone || staffdata.staff_phone;
  staffdata.staff_salary = req.body.staff_salary || staffdata.staff_salary;
  staffdata.staff_upi = req.body.staff_upi || staffdata.staff_upi;
  staffdata.staff_last_salary_paid =
    req.body.staff_last_salary_paid || staffdata.staff_last_salary_paid;
  staffdata.staff_image = (req.file && req.file.path) || staffdata.staff_image;

  user.staff.push(staffdata);
  const index = user.staff.indexOf(staffdata);
  user.staff.splice(index, 1);
  user.save();
  res.send(user);
};
