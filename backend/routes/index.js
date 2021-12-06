const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

// All the URLs of the routes in the api router will be prefixed with /api.
router.use("/api", apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    // Serve the frontend's index.html file at the root route
    router.get("/", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, "../../frontend", "build", "index.html")
        );
    });
}

// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

/*
In development, you need another way to get the XSRF-TOKEN cookie 
on your frontend application because the React frontend is on a 
different server than the Express backend. To solve this, add a 
backend route, GET /api/csrf/restore in the same file that can 
be accessed only in development and will restore the XSRF-TOKEN cookie.
*/
// GET /api/csrf/restore ------ will restore the XSRF-TOKEN cookie.
// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
    router.get("/api/csrf/restore", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        // return res.json({});
        res.status(201).json({});
    });
}

module.exports = router;
