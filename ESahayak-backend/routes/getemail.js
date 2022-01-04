const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/getemail");

router.post("/", UsersController.getemail);

module.exports = router;
