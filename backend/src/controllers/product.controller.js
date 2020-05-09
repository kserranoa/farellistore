const productCtrl={};
const Product= require('../model/mdproduct');

productCtrl.getProducts = async (req, res) => { /*using get method for all Products*/
	const Products = await Product.find(); /* same variable name (line 2 Product)*/
}

productCtrl.getProduct = async (req, res) => { /* get method for 1 product */
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