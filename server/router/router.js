// dependencies
const router = require('express').Router();
// imports
const controller = require('../controller/controller.js');
// routes
router.post('/signUp', controller.signUp);
// router.post('/logIn', controller.logIn);
// router.post('/logOut', controller.logOut);
// export router
module.exports = router;