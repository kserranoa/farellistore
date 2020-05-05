/*exportar servidor*/

const app = require ('./app'); /*importa archivo app */

/*app escuche servidor*/

function main(){ /*redactarlo mas elegante*/
	await app.listen(4000); /*async wait*/ 	
} 

main(); /* ejecuta la funcion*/