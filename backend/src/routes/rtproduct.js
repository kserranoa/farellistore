const { Router }=require('express');
const router=Router();
const path=require('path');
const { unlink }= require('fs-extra');

router.get('/api/product', async (req, res) => { /*ruta para consultar imagenes*/
	const imagenes=await Product.find();
	res.render('index', {imagenes}); /* se pone lo que va a responder */
});

router.get('/api/upload', (req, res) => { /*no debe ser asincronica entonces no lleva async*/
	res.render('upload');
});

router.post('/api/upload', async (req, res) => { /post es de escritura*/
	const image= new Product(); /*se usa variable model*/
	/* Se hace con todos los componentes que se crean en model*/
	image.title=req.body.title;
	image.description=req.body.description;
	image.filename=req.file.filename;
	image.path='/img'+ req.file.filename; /*donde va a guardarlo*/
	image.originalname= req.file.originalname;
	image.mimetype=req.file.mimetype;
	image.size=req.file.size;
	await image.save(); /* la imagen guardarla en carpeta img*/
	res.redirect('/api/product'); /* redirige la pagina al api/product*/
});
/*Busca el id de la imagen y la ruta sea el id de la img*/
/*Para ver las imagenes por separado*/
router.get('/imagen/:id', async(req, res)=>{ 
	const {id}=req.params;
	const imagen=await Product.findById(id);
	res.render('profile', {imagen});
}); 
/*Busca imagen y la borra*/
router.get('/imagen/:id/delete', async(req, res)=>{ 
	const {id}=req.params;
	const imagenDelete=await Product.findByIdAndDelete(id);
	await unlink(path.resolve('./src' + imagenDelete.path));
	res.redirect('/api/product'); /* redirige a api product*/
}); 
/* */
module.exports=router;