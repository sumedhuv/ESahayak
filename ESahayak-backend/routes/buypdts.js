const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const UsersController = require("../controllers/buypdts");

router.get("/all", UsersController.allpdts);

module.exports = router;
