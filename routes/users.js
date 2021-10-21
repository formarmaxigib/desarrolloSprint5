const express = require('express');
const router = express.Router();
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

const {register,processRegister, login, processLogin} = require ('../controllers/usersController')

/* GET users listing. */
router
.get('/register', register)
.post('/register',registerValidator, processRegister)
.get('/login', login)
.post('/login',loginValidator, processLogin);


module.exports = router;
