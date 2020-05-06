const userCtrl={};
const User= require('../model/User');
userCtrl.getUsers = async (req, res) => {
	try {
		const users=await User.find(); /*Buscar usuario*/
		res.json(users);
	}
	catch (err) {
		res.status(400).json({ 
			error: err
		}); 
	}
};
userCtrl.createUser=async (req,res)=>{
	try { /*Crear un usuario*/
		const { username }= req.body;
		const newUser = new User({username});
		await newUser.save();
		res.json('User Created');
	}
	catch (e){ /*Anuncio de error*/
		console.long(e)
		res.json(e.errmsg);
	}
};
userCtrl.deleteUser=async(req,res)=>{
	const { id }= req.params;
	await User.findByIdAndDelete(id);
	res.json('Deleted');
}
module.exports=userCtrl;