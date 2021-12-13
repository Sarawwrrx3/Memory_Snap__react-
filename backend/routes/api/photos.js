const express = require("express");
const csrf = require("csurf");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const csrfProtection = csrf({ cookie: true });
// need database
const { Photo } = require("../../db/models");

const router = express.Router();

const ValidationAddPhoto = [
    check("imageUrl")
        .exists({ checkFalsy: true })
        .withMessage("Please add an image url.")
        .isURL({ require_protocol: false, require_host: false })
        .withMessage("Please add a image link."),
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please add a content."),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please add a content."),
    // check("albumID")
    //     .exists({ checkFalsy: true })
    //     .withMessage("Please add to album."),

    handleValidationErrors,
];

// get ALL images / ALL photos
router.get(
    `/`,
    asyncHandler(async (req, res) => {
        const allPhotos = await Photo.findAll();

        if (allPhotos) {
            return res.json(allPhotos);
        } else return res.json("No photos exist.");
    })
);
// { include: { model: User } }

// get 1 photo? image id / photo id
router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const photoId = req.params.id;
        const photo = await Photo.findByPk(photoId);
        return res.json(photo);
    })
);
// {include: { model: User }}

router.post(
    `/`,
    ValidationAddPhoto,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
        // const { content, imgUrl, albumID } = req.body;
        // const body = req.body
        console.log("treelover", req.body);
        const photo = await Photo.create(req.body);
        const validateAddPhoto = validationResult(req);

        if (validateAddPhoto.isEmpty()) {
            // res.redirect(`/${req.baseUrl}/${photo.id}`);
            await photo.save();
            return res.json(photo);
        } else {
            return res.json({
                errors: "This is an error. Please try adding the photo again.",
            });
        }
    })
);

// EDIT image / Update picture
router.put(
    "/:id(\\d+)",
    requireAuth,
    // ValidationAddPhoto,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
        const { id, title, description, imageUrl } = req.body;
        const photo = await Photo.findOne({where: {id}})
      
       const updatedPhoto = await photo.update({ title, description, imageUrl });
            return res.json({photo});
        
    })
);

const photoNotFoundError = (id) => {
    const err = Error("Photo not found");
    err.errors = [`Photo with id of ${id} could not be found.`];
    err.title = "Photo not found.";
    err.status = 404;
    return err;
};


router.delete(
    // "/:id(\\d+)",
    "/:photoID",
    // requireAuth,
    // handleValidationErrors,
    asyncHandler(async (req, res, next ) => {
        const { photoID } = req.params;
        // const photo = await Photo.findByPk(photoID);
        // const deletePic = await Photo.findByPk(req.params.id);
        const deletePic = await Photo.findByPk(photoID);

            await deletePic.destroy();
            // res.status(204).end();
            return res.json({photoID})

    })
);



module.exports = router;
