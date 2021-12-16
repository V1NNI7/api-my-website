const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const indexRouter = require('./routes/index');
const toolsRouter = require('./routes/tools');

app.use('/', indexRouter);
app.use('/tools', toolsRouter);


app.listen(process.env.PORT || 4000);
