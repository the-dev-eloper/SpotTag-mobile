const express = require('express');
const { User } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const userRouter = express.Router();

userRouter.get(`/`, async (req, res) => {
    const userList = await User.find().select('-passwordHash');
    res.send(userList);
});

userRouter.get(`/:id`, async (req, res) => {
    const user = await User.findById(req.params.id).select('-passwordHash');

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
        passwordHash: bcrypt.hashSync(req.body.password, 10),
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

userRouter.delete(`/:id`, async (req, res) => {

    User.findByIdAndRemove(req.params.id)
        .then((deletedUser) => {
            if(deletedUser) {
                return res.status(200).json({ success: true, message: 'Deleted Successfully' })
            } else {
                return res.status(404).json({ success: false, message: 'User not found' })
            }
        })

        .catch((err) => {
            return res.status(400).json({ success: false, message: err.message })
        })
});

userRouter.post(`/login`, async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.secret;

    if(!user) {
        return res.status(400).send('User not Found!');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {

        const token = jwt.sign(
            { userId: user.id },
            secret,
            { expiresIn: '1d' }
        );
        res.status(200).send({ user: user.email, token: token });
    } else {
        return res.status(400).send('Invalid Password!');
    }
});

userRouter.post(`/register`, async (req, res) => {

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        city: req.body.city,
        country: req.body.country,
    });
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})

module.exports = userRouter;
