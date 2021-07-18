const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express()

const indexRouter = require('./routes/index');
const portfolioRouter = require('./routes/portfolio');


app.use(bodyparser.json());
app.use(cors()); 

app.use('/', indexRouter);
app.use('/portfolio', portfolioRouter);


app.listen(process.env.PORT || 4000 );
