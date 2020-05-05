const express = require('express');
const cors = require('cors');
const app = express(); /* permite inicializar el servidor */

//configuration
app.set('port', process.env.PORT || 4000); /* Al app el puerto que va a usar*/

//miedenwares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/t', require('./router/user'));

module.exports = app; /*exportar servidor*/