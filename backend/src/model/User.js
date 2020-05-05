const {Schema,model}= require ('moongose');
const userSchema=new Schema({
	username:{ /*usar metodo*/
		type:String, 
		required: true,
		unique:true,
		trim:true
	}
}, {
	timestamps:true
}

);
module.exports=model('User', userSchema);