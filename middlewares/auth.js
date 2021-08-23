/* const jwt = require('jsonwebtoken');

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

module.exports = verifyJWT; */

import express from 'express';

// ir buscar uma instância do router do Express.js
var apiRoutes = express.Router(); 

// middleware
apiRoutes.use(function(req, res, next) {

  // procurar a propriedade token em partes diferentes do pedido
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // descodificar caso haja um valor no request
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('isToken'), function(err, decoded) {      
      if (err) { // erro!
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // tudo ok! vamos passar esse valor para o req.decoded para ser usado no resto da aplicação
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // se não houver token no pedido/request, retornar erro
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

// defenir quais os caminhos que devem estar protegidos
app.use('/users', apiRoutes);
