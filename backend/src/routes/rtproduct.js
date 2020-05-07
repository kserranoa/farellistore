const { Router }=require('express');
const router=Router();

const { getProduct,createProduct, deleteProduct}= require('../controllers/product.controller');
router.route('/')
	.get(getProduct) /* obtener producto*/ /*Ruta1*/
	.post(createProduct); /* crear producto*/ /*Ruta2*/
router.route('/:id') /* necesita primero id*/
	.delete(deleteProduct); /* borrar producto*/ /*Ruta3*/
module.exports=router;