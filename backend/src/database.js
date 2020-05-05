/*Hacer conexion de base de datos*/

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/farellidb';/*direccion donde va a estar la base de datos*/
mongoose.connect(URI,
{ useNewUrlParser:true,
	useCreateIndex:true
}
	);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('dbinconnected');
});