const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;



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
    return res.json({error:"password is required and should be atleast six characters"});
}



const password1 = await bcrypt.hash(password,saltRounds)

const emailExist= await User.findOne({email});
if(emailExist){
    console.log("email already exists");
    return res.json({error:"email already exits"})
}





 const user = await User.create({name,email,password:password1});
if(user){
    console.log("user created");
    return res.json(user)
}
 


} catch (error) {
    console.log("error occured:",error)
}


}


const loginUser = async (req,res)=>{
    const {email,password}=req.body;

    const user= await User.findOne({email});

    if(!user){
        return res.json({error:"Sign up to continue"});
    }else if(!password){
        return res.json({error:"password is required"});
    }else{
       const checkPassword = await bcrypt.compare(password,user.password);
       if(checkPassword){
        return res.json({message:"user logged in"});
       }else{
        return res.json({error:"user doesn't exit"});
       }
    }


    

 

}

module.exports = {
    test,
    registerUser,
    loginUser
}