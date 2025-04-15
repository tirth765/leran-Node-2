const express = require('express')
const { usersController } = require('../../../controller')
const passport = require('passport')
const { generate_user } = require('../../../controller/users.controller')
const Users = require('../../../models/users.model')

const user = express.Router()

// localhost:8000/api/v1/users/register
user.post(
    '/register',
    usersController.registerUser
)

// localhost:8000/api/v1/users/login
user.post(
    '/login',
    usersController.user_login
)

// localhost:8000/api/v1/users/generateNewTokens
user.get(
    '/generateNewTokens',
    usersController.generateNewTokens
)

// localhost:8000/api/v1/users/logout
user.post(
    '/logout',
    usersController.user_logout
)

// localhost:8000/api/v1/users/checkAuth
user.get(
    '/checkAuth',
    usersController.check_Auth
)

user.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

user.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    async function (req, res) {
        console.log(req.user);

        if (req.user) {

            const userData = await Users.findById(req.user._id).select(
                "-password-refreshToken"
            );

            const options = {
                httpOnly: true,
                secure: true,
            };

            const { accessToken, refreshToken } = await generate_user(req.user._id);

            return res
                .status(200)
                .cookie("accessToken", accessToken, options)
                .cookie("refreshToken", refreshToken, options)
                .redirect('http://localhost:3000');



        }

    }
)

// localhost:8000/api/v1/users/OTPVarification
user.post(
    '/OTPVarification',
    usersController.checkVarification
)

module.exports = user