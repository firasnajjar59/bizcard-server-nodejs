var express = require('express');
var {register,login,userInfo} = require('../../controllers/usersController/usersController');
var router = express.Router();

/* /api/users */
// ! register user
router.post('/register', register);
// ! login user
router.post('/login',login);
// ! get user information
router.get('/userInfo', userInfo);

module.exports = router;