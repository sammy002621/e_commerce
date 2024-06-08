const User = require("../models/user");



const test = (req,res)=>{
    console.log("connected to the frotend");
    res.json({message:"are you there ?"})
}

const registerUser =  async (req,res)=>{
try {
    
const {name,email,password}=req.body;

if(!name){
    return res.json({error:"name is required"});
}


if(!password || password.length<6){
    return res.json({error:"password is required"});
}

const emailExist= await User.findOne({email});
if(emailExist){
    console.log("email already exists");
    return res.json({error:"email already exits"})
}


 const user = await User.create({name,email,password});
if(user){
    console.log("user created");
    return res.json(user)
}
 


} catch (error) {
    console.log("error occured:",error)
}


}

module.exports = {
    test,
    registerUser
}