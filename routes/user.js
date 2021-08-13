const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { Op } = require('sequelize');
const { sha256 } = require('js-sha256');

router.post('/', async (req, res) => {
    const response = await Users.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: sha256(req.body.password + '$@#324'),
    });
    res.status(200).json(response)
});

router.get('/', async (req, res) => {
    const response = await Users.findAll({
    });
    res.status(200).json(response)
});

router.put('/:id', async (req, res) => {
    const response = await Users.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json('Usuário atualizado com sucesso!')
})

router.delete('/:id', async (req, res) => {
    const response = await Users.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json('Usuário deletado com sucesso!')
});

module.exports = router;


