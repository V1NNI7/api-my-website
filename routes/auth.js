const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const result = await Users.findAll({
        where: {
            email: req.body.email,
            password: sha256(req.body.password = '$@#324')
        }
    });
    
    if (!result.length) {
        res.status(403).json({ auth: false });
    }
    const token = jwt.sign({ id: result.id }, 'test', { expiresIn: 1200 });
    res.status(200).json({ 
        auth: true,
        token: token,
        id: result[0].dataValues.id, 
        name: result[0].dataValues.name, 
        email: result[0].dataValues.email,
        username: result[0].dataValues.username,
        password: result[0].dataValues.password,
    });
});

module.exports = router;