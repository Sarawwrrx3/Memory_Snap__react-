const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const albumRouter = require("./albums.js");
const photosRouter = require("./photos.js");
const commentsRouter = require("./comments.js");
// const express = require('express');

router.use("/session", sessionRouter);
router.use("/albums", albumRouter);
router.use("/users", usersRouter);
router.use("/photos", photosRouter);
router.use("/comments", commentsRouter);
// const apiRouter = require('./api');

// All the URLs of the routes in the api router will be prefixed with /api.
// router.use('/api', apiRouter);

// Static routes
// Serve React build files in production
// if (process.env.NODE_ENV === "production") {
//     const path = require("path");
//     // Serve the frontend's index.html file at the root route
//     router.get("/", (req, res) => {
//         res.cookie("XSRF-TOKEN", req.csrfToken());
//         return res.sendFile(
//             path.resolve(__dirname, "../../frontend", "build", "index.html")
//         );
//     });

//     // Serve the static assets in the frontend's build folder
//     router.use(express.static(path.resolve("../frontend/build")));

//     // Serve the frontend's index.html file at all other routes NOT starting with /api
//     router.get(/^(?!\/?api).*/, (req, res) => {
//         res.cookie("XSRF-TOKEN", req.csrfToken());
//         return res.sendFile(
//             path.resolve(__dirname, "../../frontend", "build", "index.html")
//         );
//     });
// }

// /*
// In development, you need another way to get the XSRF-TOKEN cookie 
// on your frontend application because the React frontend is on a 
// different server than the Express backend. To solve this, add a 
// backend route, GET /api/csrf/restore in the same file that can 
// be accessed only in development and will restore the XSRF-TOKEN cookie.
// */
// // GET /api/csrf/restore ------ will restore the XSRF-TOKEN cookie.
// // Add a XSRF-TOKEN cookie in development
// if (process.env.NODE_ENV !== "production") {
//     router.get("/api/csrf/restore", (req, res) => {
//         res.cookie("XSRF-TOKEN", req.csrfToken());
//         // return res.json({});
//         res.status(201).json({});
//     });
// }
// //? test ROUTE
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

//? test ROUTE ----- POST /api/test
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

// GET /api/set-token-cookie
//? test ROUTE the setTokenCookie function
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// GET /api/restore-user
// test route the restoreUser
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// GET /api/require-auth
//? test ROUTE
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

//? test route your requireAuth middleware
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
