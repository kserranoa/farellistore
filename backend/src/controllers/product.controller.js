const productCtrl={};
const product= require('../model/mdproduct');
productCtrl.getProducts = async (req, res) => {
	try {
		const products=await product.find(); /*Buscar usuario*/
		res.json(products);
	}
	catch (err) {
		res.status(400).json({ 
			error: err
		}); 
	}
};
productCtrl.createProduct=async (req,res)=>{
	try { /*Crear un usuario*/
		const { prodtype }= req.body;
		const newProduct = new mdproduct({prodtype});
		await newProduct.save();
		res.json('Product Created');
	}
	catch (e){ /*Anuncio de error*/
		console.long(e)
		res.json(e.errmsg);
	}
};
productCtrl.deleteProduct=async(req,res)=>{
	const { id }= req.params;
	await product.findByIdAndDelete(id);
	res.json('Deleted');
}
module.exports=productCtrl;