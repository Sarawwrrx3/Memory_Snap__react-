// backend/routes/api/session.js
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Comment } = require("../../db/models");
const { use } = require("./session");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const homeFiles = await Comment.findAll({
      where: { songId: id },
    });

    console.log(homeFiles);

    return res.json({ homeFiles });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const comment = await Comment.create({
        comment: req.body.value,
        userID: req.body.userID,
        photoID: req.body.photoID,
    });
    return { comment };
  })
);

module.exports = router;
