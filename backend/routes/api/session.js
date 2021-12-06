// file will hold the resources for the route paths beginning with /api/session


// backend/routes/api/session.js
const express = require('express');
const asyncHandler = require('express-async-handler');


const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

/*
POST / api / session 
login route will expect the body of the request to have a key of credential 
with either the username or email of a user and a key of password with the 
password of the user.
*/
const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,
];


// POST /api/session ----- Log in
router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


// User Logout API Route
// DELETE /api/session
// logout route will remove the token cookie from the response 
// ------ and return a JSON success message.
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);


// Get Session User API Route
//  GET /api/session ------ get session user route will return the 
// ------ session user as JSON under the key of user
// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);




module.exports = router;