/*Exportar Servidor*/

require('dotenv').config(); /*importar libreria dotenv: manejo variables de entorno*/
const app = require ('./app'); /*importa archivo app */
const database = require('./database'); /*importar archivo database*/
async function main(){ /*app escuche servidor*/
	await app.listen(app.get('port')); /*async wait*/
	console.log('Connected in port', app.get('port')); /*Para probar que si esta escuchando al puerto*/
} 
main(); /* ejecuta la funcion*/
