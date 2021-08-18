const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { Op } = require('sequelize');
const { sha256 } = require('js-sha256');

router.post('/', async (req, res) => {
    const resultEmail = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    if (resultEmail === null) {
        const response = await Users.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: sha256(req.body.password + '$@#324'),
        });
        res.status(200).json(response);
    } else {
        res.status(400).json('Email já existente.')
    }
});

router.get('/:id', async (req, res) => {
    const response = await Users.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(response);
})

router.get('/', async (req, res) => {
    const response = await Users.findAll({
    });
    res.status(200).json(response)
});

router.put('/:id', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: sha256(req.body.password + '$@#324'),
    }
    const { id } = req.params;

    const consultUser = await Users.findOne({
        where: {
            id
        }
    });

    console.log(consultUser.email)

    if (user.email === consultUser.email) {
        const emailOutdated = {
            name: req.body.name,
            email: consultUser.email,
            username: req.body.username,
            password: sha256(req.body.password + '$@#324'),
        }

        const emailOutdatedCheck = await Users.update(emailOutdated, {
            where: {
                id
            }
        });

        res.status(200).json('Email manteve o mesmo!')
    } else {
        const checkEmailExist = await Users.findOne({
            where: {
                email: user.email
            }
        });
        if (!checkEmailExist) {
            const response = {
                name: req.body.name,
                email: user.email,
                username: req.body.username,
                password: sha256(req.body.password + '$@#324'),
            };
            
            const responseEmailCheckNotExist = await Users.update(response, {
                where: {
                    id
                }
            });

            res.status(200).json('Email atualizado com sucesso!');
        } else {
            res.status(400).json('O email o qual deseja atualizar já está em uso!')
        }
    }
});

router.delete('/:id', async (req, res) => {
    await Users.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json('Usuário deletado com sucesso!')
});

module.exports = router;


