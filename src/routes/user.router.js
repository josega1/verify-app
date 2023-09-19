const { getAll, create, getOne, remove, update, verifyEmail, login, getLoggedUser, } = require('../controllers/user.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/verify/:code')
    .get(verifyEmail)

routerUser.route('/login')
    .post(login);

routerUser.route('/me')
    .get(verifyJWT, getLoggedUser);

routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;