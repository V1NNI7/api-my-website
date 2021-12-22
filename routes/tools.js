const express = require('express');
const router = express.Router();
const { Tools } = require('../models');

router.get('/', async (req, res) => {
    const response = await Tools.findAll();
    res.status(200).json(response);
});

router.post('/', async (req, res) => {
    try {
        const { name, logo, desc, status } = req.body;
        const response = await Tools.create({
            name, logo, desc, status,
        });
        return res.status(200).send(response);
    } catch (err) {
        return res.status(400).send({ error: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const response = await Tools.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({ error: 'Houve um erro ao tentar atualizar a Stack' });
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const response = await Tools.destroy({
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