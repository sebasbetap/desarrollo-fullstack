const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
//const crypt = require('./components/crypt/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

app.use(cors());

//Router
app.use('/api/user', user);
app.use('/api/auth', auth);
//app.use('/api/crypt', crypt);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Middleware para gestionar errores sin traza en console
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});