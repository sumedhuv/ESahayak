const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const auth = require("../middlewares/auth");

storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    let ext;
    switch (file.mimetype) {
      case "image/png":
        ext = ".png";
        break;
      case "image/jpg":
        ext = ".jpg";
        break;
      case "image/jpeg":
        ext = ".jpeg";
        break;
      default:
        break;
    }
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); // accept
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
const UsersController = require("../controllers/staff");

router
  .post(
    "/:o_id/addstaff",
    auth,
    upload.single("staff_image"),
    UsersController.addstaff
  )
  .get("/:o_id/allstaff", UsersController.allstaff)
  .get("/:o_id/:id", UsersController.oneuser)
  .put(
    "/:o_id/:id/update",
    auth,
    upload.single("staff_image"),
    UsersController.updateone
  );

module.exports = router;
