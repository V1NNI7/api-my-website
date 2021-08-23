const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];

    // Verifica se o x-access-token está vazio

    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'Token Não Encontrado'
        });
    }

    // Verifica se o token inserido é válido

    jwt.verify(token, 'isToken', (err, decoded) => {
        if (err) {
            return res.status(300).json({
                auth: false,
                message: "Falha Ao Autenticar"
            });
        }
        req.userid = decoded.id
        next();
    });
}

module.exports = verifyJWT;