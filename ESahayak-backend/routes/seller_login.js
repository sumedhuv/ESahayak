const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/seller_login");

router.post("/", UsersController.login);

module.exports = router;
