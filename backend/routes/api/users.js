// This file will hold the resources for the route paths beginning with /api/users

// backend/routes/api/users.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Album } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// Validating Signup Request Body. Signup Validation  ------ POST /api/users
const validateSignup = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("username")
        .not()
        .isEmail()
        .withMessage("Username cannot be an email."),
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more."),
    handleValidationErrors,
];

// User Signup API Route ---- POST /api/users
/*
In the route handler, call the signup static method on the User model. 
If the user is successfully created, then call setTokenCookie and 
return a JSON response with the user information. If the creation of 
the user is unsuccessful, then a Sequelize Validation error will be 
passed onto the next error-handling middleware.
*/
// Sign up ------ POST /api/users
router.post(
    "/",
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });
        if (!user) {
            res.json({});
            return;
        }
        // const userAndAlbum = await User.findByPk(user.id)
        await setTokenCookie(res, user);

        return res.json({
            // user: user.toSafeObject(),
            user,
            // userAndAlbum
        });
    })
);

// get the all the user's album ----- to assign a photo to an album
router.get(
    "/:id(\\d+)/albums",
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const albums = await Album.findAll({
            where: {
                userID: id,
            },
        });
        // console.log("qwerty", albums);
        res.json({ albums });
    })
);

module.exports = router;
