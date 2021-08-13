const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { Op } = require('sequelize');
const { sha256 } = require('js-sha256');
const mongoose = require('mongoose');

/* router.post('/', async (req, res) => {
    const response = await Users.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: sha256(req.body.password + '$@#324'),
    });
    res.status(200).json(response)
}); */

router.post('/', (req, res) => {
    var erros = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        errors.push({texto: "Texto inválido"})
    }

    if(!req.body.username || typeof req.body.username == undefined || req.body.username == null){
        errors.push({texto: "Usuário inválido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        errors.push({texto: "Email inválido"})
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null){
        errors.push({texto: "Senha inválido"})
    }

    if(req.body.password.length < 4) {
        erros.push({texto: "Senha muito curta"})
    }

    if(erros.length > 0) {
        console.log({erros: erros})
    } else {
        Users.findOne({email: req.body.email}).then((users) => {
            if(users) {
                req.flash("error_msg", "Já existe uma conta com este email no nosso sistema!")
            } else {
                const response = new Users({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                })
            }
        })
    }
})


router.get('/', async (req, res) => {
    const response = await Users.findAll({
    });
    res.status(200).json(response)
});

router.put('/:id', async (req, res) => {
    await Users.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json('Usuário atualizado com sucesso!')
})

router.delete('/:id', async (req, res) => {
    await Users.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json('Usuário deletado com sucesso!')
});

module.exports = router;


