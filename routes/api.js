const express = require('express');
const router = express.Router();
const cards=require("./cards/cards")
const users=require("./users/users")

/* /api */
router.use('/cards', cards);
router.use('/users', users);


module.exports = router;