const express = require('express');
const router = express.Router();
const { Tools } = require('../models');

router.get('/', async (req,res) => {
    const response = await Tools.findAll();
    res.status(200).json(response);
});

router.post('/', async (req, res) => {
    try {
        const { name, logo, desc, status} = req.body;
        const response = await Tools.create({
            name, logo, desc, status,
        });
        return res.status(200).send(response);
    } catch (err) {
        return res.status(400).send({ error: err});
    }
});

// v1nni7
// v1nni7_db2021

module.exports = router;    