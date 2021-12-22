const express = require('express');
const router = express.Router();
const { Projects } = require('../models');

router.get('/', async (req,res) => {
    const response = await Projects.findAll();
    res.status(200).json(response);
});

router.post('/', async (req,res) => {
    try {
        const {name, link, image, desc, category} = req.body;
        const response = await Projects.create({
            name,link,image,desc,category
        });
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send('Erro ao tentar postar um novo projeto');
    }
});

router.put('/:id', async (req,res) => {
    try {
        const response = await Projects.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send('Erro ao atualizar o projeto');
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const response = await Projects.destroy({
            where: {
                id: req.params.id,
            }
        });
        return res.status(200).send('Registro deletado com sucesso!');
    } catch (error) {
        return res.status(400).send('Erro ao tentar deletar esse registro!');
    }
});

module.exports = router;


