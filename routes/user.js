const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
    const response = await Users.create({
        name: req.body.name,
        email: req.body.email,
        user: req.body.user,
        password: req.body.password,      
    });
    res.status(200).json(response)
});

router.get('/', async (req, res) => {
    const response = await Users.findAll({
    });
    res.status(200).json(response)
});

module.exports = router;


