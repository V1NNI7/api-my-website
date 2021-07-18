const express = require('express');
const router = express.Router();
const { Portifolio } = require('../models');
const { Op } = require('sequelize')

router.post('/', async (req, res) => {
    const response = await Portifolio.create({
        name: req.body.name,
        link: req.body.link,
        img: req.body.img,

    });
    res.status(200).json(response)
});

router.get('/', async (req, res) => {
    const response = await Portifolio.findAll({
    });

    res.status(200).json(response);
});

router.get('/search/:name', async (req, res) => {
    const response = await Portifolio.findAll({
        where: {
            name: {
                [Op.like]: `${req.params.name}%`
            }
        }
    });
    res.status(200).json(response)
});

router.put('/:id', async (req, res) => {
    const response = await Portifolio.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(response);
});

router.delete('/:id', async (req,res) => {
    const response = await Portifolio.destroy({
        where: {
            id: req.params.id
        }
    });
     res.status(200).json(response)
});




module.exports = router;