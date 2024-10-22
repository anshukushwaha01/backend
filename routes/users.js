const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


router.post('/createUser',userController.createUser);
router.get('/getuser',userController.getUser)
router.post('/loginNow',userController.loginNow)

module.exports = router;