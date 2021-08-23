const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const result = await Users.findAll({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    });
    if (!result.length) {
        res.status(403).json('Email ou senha incorretos!');
    } else {
        const token = jwt.sign({ id: result.id }, 'isToken', { expiresIn: 600 });
        res.status(200).json({
            auth: true,
            token: token,
            id: result[0].dataValues.id,
            name: result[0].dataValues.name,
            username: result[0].dataValues.username,
            email: result[0].dataValues.email,
        });
    };
});

module.exports = router;