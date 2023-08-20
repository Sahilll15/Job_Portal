const express = require('express');
const router = express.Router();
const { register, upload, login } = require('../controllers/user.controllers')
const { getAlluser } = require('../utils/Email')

router.post('/register', upload, register)
router.post('/login', login)


module.exports = router;