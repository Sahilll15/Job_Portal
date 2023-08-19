const express = require('express');
const router = express.Router();
const { register, upload, login } = require('../controllers/user.controllers')

router.post('/register', upload, register)
router.post('/login', login)

module.exports = router;