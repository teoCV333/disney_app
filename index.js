const express = require('express');

const routerApi = require('./routes');
require('dotenv').config();

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world');
});

routerApi(app);

const sequelize = require('./libs/mysql');

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`The server has been initialized on port ${port}`);
});


