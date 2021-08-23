const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const portfolioRouter = require('./routes/portfolio');

app.use(cors());
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
})

app.use('/', indexRouter);
app.use('/login', authRouter);
app.use('/users', usersRouter);
app.use('/portfolio', portfolioRouter);

app.listen(process.env.PORT || 4000);
