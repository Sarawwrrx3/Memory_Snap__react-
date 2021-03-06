const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const routes = require("./routes");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

// AFTER csurf 4e
app.use(routes);

// Phase 2: Error Handling
// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     // res.status(500).send('Uh Oh... Something broke!')

// })

// Resource Not Found Error-Handler
// just a regular middleware.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// Process sequelize errors. Sequelize Error-Handler
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Validation error";
    }
    next(err);
});

// Error Formatter Error-Handler --- should be the last middlewar
/*
The last error handler is for formatting all the errors before returning a JSON response. 
It will include the error message, the errors array, and the error stack trace (if the 
    environment is in development) with the status code of the error message.
*/
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

// from stackoverflow
//stackoverflow.com/questions/58134287/catch-error-for-bad-json-format-thrown-by-express-json-middleware
// https: app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//         console.error(err);
//         return res.status(400).send({ status: 404, message: err.message }); // Bad request
//     }
//     next();
// });

//stackoverflow.com/questions/15819337/catch-express-bodyparser-error
// https: app.use(function (error, req, res, next) {
//     if (error instanceof SyntaxError) {
//         sendError(res, myCustomErrorMessage);
//     } else {
//         next();
//     }
// });

//stackoverflow.com/questions/58134287/catch-error-for-bad-json-format-thrown-by-express-json-middleware
// https: app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//         if (err.type === "entity.parse.failed") {
//             let data = req.body || req.query;
//             try {
//                 JSON.parse(data); // <-- reproduce error in order to catch it
//             } catch (error) {
//                 // get the first line of error which is "SyntaxError: Unexpected string in JSON at position 59"
//                 let message = error.toString().split("\n")[0];
//                 return res.status(400).send({ status: 400, message: message }); // Bad request
//             }
//         } else return res.status(400).send(err); // Bad request
//     }
//     next();
// });

module.exports = app;
