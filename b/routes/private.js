const express = require('express');
const router = express.Router();
const {getPrivateDate} = require('../middleware/private');

const {protect }= require("../middleware/auth")

router.route("/").get(protect,getPrivateDate);
module.exports = router;