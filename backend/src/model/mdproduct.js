const { Schema,model }= require('mongoose');
const productSchema= new Schema(
	{
		prodtype:{ /*usar metodo*/
			type:String, 
			required: true,
			unique:true,
			trim:true
		}
	}, {
		timestamps:true
	}

	);
module.exports=model('Product', productSchema);