const { Schema,model }= require('mongoose');
const productSchema= new Schema(
	{
		title:{type: String},
		description:{type: String},
		filename:{type: String}, /*nombre del archivo */
		path:{type: String},
		originalname:{type: String},
		mimetype:{type: String},
		size:{type: Number}, 
		created_at:{type: Date, default:Date.now()},
		
	}

	);
module.exports=model('Product', productSchema);