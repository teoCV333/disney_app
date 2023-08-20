const express = require('express');

const routerApi = require('./routes');
require('dotenv').config();

const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world');
});

routerApi(app);

const database = require('./libs/mysql');

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: " Disney app documentation",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(port, () => {
  console.log(`The server has been initialized on port ${port}`);
});


