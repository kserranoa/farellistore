/*Exportar Servidor*/

const app = require ('./app'); /*importa archivo app */
const database = require('./database'); /*importar archivo database*/
async function main(){ /*app escuche servidor*/
	await app.listen(4000); /*async wait*/
} 
main(); /* ejecuta la funcion*/
