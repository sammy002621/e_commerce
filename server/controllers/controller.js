const User = require("../models/user");



const test = (req,res)=>{
    console.log("connected to the frotend");
    res.json({message:"are you there ?"})
}

const registerUser =  async (req,res)=>{
try {
    
const {name,email,password}=req;

const emailExist= await User.findOne({email});
if(emailExist){
    console.log("email already exists");
    res.json({error:"email already exits"})
}


const user = await User.create({name,email,password});

res.json({user})

} catch (error) {
    console.log("error occured:",error)
}


}

module.exports = {
    test,
    registerUser
}