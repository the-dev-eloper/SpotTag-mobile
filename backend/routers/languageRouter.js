
const express = require('express');
const multer = require('multer');
const { Language } = require("../models/languageModel");

const languageRouter = express.Router();

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }

        cb(uploadError, 'public/uploads');
    },

    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];

        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({ storage: storage });

languageRouter.get(`/`, async (req, res) => {

    const languageList = await Language.find({});
    res.send(languageList);
});

languageRouter.get(`/:id`, async (req, res) => {

    const languageList = await Language.findById(req.params.id);
    res.send(languageList);
});

languageRouter.post(`/`, uploadOptions.single('image'), async (req, res) => {

    const file = req.file;
    if (!file) return res.status(400).send('No image in the request');

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    const language = new Language({
        name: req.body.name,
        image: `${basePath}${fileName}`,
        developer: req.body.developer,
        stableRelease: req.body.stableRelease,
        firstAppeared: req.body.firstAppeared,
        bugList: req.body.bugList
    });

    const createdLanguage = await language.save();

    if(createdLanguage) {
        res.status(201).json(createdLanguage)
    } else {
        res.status(500).json({
            error: err,
            success: false
        })
    }
});

languageRouter.put('/:id', uploadOptions.single('image'), async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Language Id');
    }

    const language = await Language.findById(req.params.id);
    if(!language) return res.status(400).send('Invalid Language');

    const file = req.file;
    let imagepath;

    if (file) {
        const fileName = file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        imagepath = `${basePath}${fileName}`;
    } else {
        imagepath = language.image;
    }

    const updatedLanguage = await Language.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            image: imagepath,
            developer: req.body.developer,
            stableRelease: req.body.stableRelease,
            firstAppeared: req.body.firstAppeared,
            bugList: req.body.bugList
        }
    );

    if(!updatedLanguage) {
        return res.status(400).send('Language not Found!')
    }

    res.send(updatedLanguage);
})

languageRouter.delete('/:id', (req, res) => {

    Language.findByIdAndRemove(req.params.id)
        .then((deletedLanguage) => {

            if(deletedLanguage) {
                return res.status(201).json({ success: true, message: 'Deleted Successfully' })
            } else {
                return res.status(404).json({ success: false, message: 'Language not found' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err })
        })
});

languageRouter.get(`/get/count`, async (req, res) => {
    const languageCount = await Language.countDocuments({});

    if (!languageCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        languageCount: languageCount
    });
});

languageRouter.put(
    '/gallery-images/:id',
    uploadOptions.array('images', 10),
    async (req, res) => {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).send('Invalid Language Id');
        }

        const files = req.files;
        let imagepaths = [];
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

        if (files) {
            files.map((file) => {
                imagepaths.push(`${basePath}${file.fileName}`);
            });
        }

        const updatedLanguage = await Language.findByIdAndUpdate(
            req.params.id,
            {
                images: imagepaths,
            },
            { new: true }
        );

        if(!updatedLanguage) {
            return res.status(500).send('the gallery cannot be updated!');
        }

        res.send(updatedLanguage);
    }
);

module.exports = languageRouter;
