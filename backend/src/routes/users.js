const { Router }=require('express');
const router=Router();

const { getUsers,createUser, deleteUser}= require('../controllers/users.controller');
router.route('/')
	.get(getUsers) /* obtener usuario*/ /*Ruta1*/
	.post(createUser); /* crear usuario*/ /*Ruta2*/
router.route('/:id') /* necesita primero id*/
	.delete(deleteUser); /* borrar usuario*/ /*Ruta3*/
module.exports=router;