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
        // console.log("sdfsdfsdf", photo);
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
        // console.log(body, '<--------body')
        const photo = await Photo.create(req.body);
        console.log("treelover", photo);
        const validateAddPhoto = validationResult(req);

        if (validateAddPhoto.isEmpty()) {
            // res.redirect(`/${req.baseUrl}/${photo.id}`);
            await photo.save();
            console.log("This is the photo from the api backend.", photo);
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
        // console.log("sadfasdfds", req.body);
        const { id, title, description, imageUrl } = req.body;
        console.log("treeloverwww", req.body);
        const photo = await Photo.findOne({where: {id}})
      
       const updatedPhoto = await photo.update({ title, description, imageUrl });
        console.log("upppppddatedd photoo", updatedPhoto, photo);
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
        console.log("asdfwerwer -----", photoID);
        // const photo = await Photo.findByPk(photoID);
        // const deletePic = await Photo.findByPk(req.params.id);
        const deletePic = await Photo.findByPk(photoID);
        // console.log("gregsrfg", deletePic);
        // if (deletePic) {
            await deletePic.destroy();
            // res.status(204).end();
            return res.json({photoID})
        // } else {
        //     next(photoNotFoundError(req.params.id));
        // }
        // await photo.destroy();
        // return res.json(req.params.id);
        // return res.json({ deletePic });
        // return res.json({ photoId: photo.id });
        // ===========================
    })
);



module.exports = router;
