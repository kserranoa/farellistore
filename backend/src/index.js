/*Exportar Servidor*/
/* */
const express= require('express'); /*framework para node.js*/
const morgan= require('morgan'); /* muestra lo que esta sucediendo en el servidor*/
const multer= require('multer'); /*procesa informacion que recibe*/
const uuid= require('uuid'); /*version 4= crea id unicos, cada vez que se suba un img crea un id unico*/
const { format } = require('timeago.js');/*importa la fecha que se guardo*/
const path = require('path');

require('dotenv').config(); /*importar libreria dotenv: manejo variables de entorno*/
const app = require ('./app'); /*importa archivo app */
const database = require('./database'); /*importar archivo database*/
app.set('views', path.join(__dirname, 'views')); /*Se va al directorio a la carpeta view(frontend)*/
app.set('view engine', 'ejs'); /*Para que el backend ejecute codigo html*/
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
const storage = multer.diskStorage({
	destination: path.join(__dirname, '/img'), /*ruta que guarda imagen*/
	filename: (req,file,cb,filename)=>{
	console.log(file);
	cb(null,uuid()+path.extname(file.originalname));
	}
})
app.use(multer({storage}).single('imagen')); /*Single=de la ruta storage se va a usar solo una imagen*/
app.use((req,res,next)=>{ /*next = variable global para dar secuencia*/
	app.locals.format=format;
	next();
});
app.use(require('./routes/rtproduct'));
app.use(express.static(path.join(__dirname, 'views'))); /*static=archivo css es un archivo static frontend*/
async function main(){ /*app escuche servidor*/
	await app.listen(app.get('port')); /*async wait*/
	console.log('Connected in port', app.get('port')); /*Para probar que si esta escuchando al puerto*/
} 
main(); /* ejecuta la funcion*/
