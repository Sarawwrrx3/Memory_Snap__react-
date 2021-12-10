const express = require("express");
const csrf = require("csurf");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
    restoreUser,
    setTokenCookie,
    requireAuth,
} = require("../../utils/auth");
const csrfProtection = csrf({ cookie: true });
const { Photo, Album } = require("../../db/models");
// const { request } = require("../../app");

const router = express.Router();

const ValidationAddAlbum = [
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please add a title."),
    handleValidationErrors,
];

router.get(
    "/",
    asyncHandler(async (req, res, next) => {
        const allAlbums = await Album.findAll();
        console.log("what is allAlbums", allAlbums);
        if (allAlbums) {
            return res.json(allAlbums);
        } else return res.json("No album exist.");
        // console.log(albums)
    })
);

/**
 Album {
    dataValues: {
      id: 1,
      userID: 1,
      title: 'Travel Pics',
      createdAt: 2021-11-12T03:45:49.265Z,
      updatedAt: 2021-11-12T03:45:49.265Z
    },
*/

// SPECIFC ALBUM
router.get(
    // "/:id",
    "/:id(\\d+)",
    asyncHandler(async (req, res, next) => {
        const album = await Album.findByPk(req.params.id, {
            include: [Image],
        });
        return res.json(album);
        // console.log("hello",album)
    })
);

router.post(
    "/",
    ValidationAddAlbum,
    handleValidationErrors,
    asyncHandler(async function (req, res) {
        const album = await Album.create(req.body);
        // console.log("gfdsa", album );
        // const validateAddAlbum = validationResult(req);

        // if (validateAddAlbum.isEmpty()) {
        //     await album.save();
        //     console.log("This is the album from the api backend.", album);
        //     return res.json(album);
        // } else {
        //     return res.json({
        //         errors: "This is an error. Please try adding the album again.",
        //     });
        // }
        return res.json(album);
    })
);

//edit album
router.patch(
    // "/:id",
    "/:id(\\d+)",
    asyncHandler(async function (req, res) {
        const number = parseInt(req.params.id, 10);
        const { title } = req.body;
        const album = await Album.findByPk(number);
        const newAlbum = album.update({
            title,
        });
        return res.json(newAlbum);
    })
);

router.delete(
    "/:albumID",
    requireAuth,
    asyncHandler(async (req, res) => {
        // const albumID = req.params.id;
        const { albumID } = req.params;
        // const userID = req.user.id;

        const album = await Album.findByPk(albumID);

        // const album = await Album.findOne({
        //     // where: { id: albumID, userID },
        //     where: { albumID, userID },
        // });
 
            await album.destroy();

        res.sendStatus(200);
        return res.json({ albumID });
    })
);

// TODO: Put

// edit / update
router.put(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const editAlbumID = await Album.findByPk(req.params.id);

        await editAlbumID.update({ title });

        res.json(editAlbumID);
    })
);

module.exports = router;
