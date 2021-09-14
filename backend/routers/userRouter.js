const express = require('express');
const { User } = require('../models/userModel');

const userRouter = express.Router();

userRouter.get(`/`, async (req, res) => {
    const userList = await User.find({});
    res.send(userList);
});

userRouter.get(`/:id`, async (req, res) => {
    const user = await User.findById(req.params.id);

    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not Found!'});
    }
});

userRouter.post(`/`, async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        city: req.body.city,
        country: req.body.country,
    });

    const createdUser = await user.save();

    if(createdUser) {
        res.status(201).json(createdUser)
    } else {
        res.status(500).json({
            error: err,
            success: false
        })
    }
});

userRouter.put(`/:id`, async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            city: req.body.city,
            country: req.body.country,
        },
        {
            new: true
        }
    );

    if(updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ success: false, message: 'User not Found!' })
    }
});

module.exports = userRouter;