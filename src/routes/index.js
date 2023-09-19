const express = require('express');
const routerUser = require('./user.router');
const router = express.Router();

router.use('/users', routerUser)

// colocar las rutas aquí


module.exports = router;