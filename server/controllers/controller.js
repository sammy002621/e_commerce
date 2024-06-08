const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")





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
        return res.json({error:"email is required and should exist"});
    }if(!password){
        return res.json({error:"password is required"});
    }else{
       const checkPassword = await bcrypt.compare(password,user.password);
       if(checkPassword){
        jwt.sign({id:user._id,name:user.name,email:user.email},process.env.JWT_SECRET,{},(err,token)=>{
              if(err) console.log(err);
              res.cookie("token",token).json(user);
        })
        
       }else{
        return res.json({error:"user doesn't exit"});
       }
    }


    

 

}


const getProfile = (req,res)=>{
    const {token}=req.cookies;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err){ 
                console.error(err);
                res.status(401).json(error,"Invalid token")
            }else{
                return res.json(user)
            }
            
        })
    }else{
        res.json(null);
    }

}

module.exports = {
    registerUser,
    loginUser,
    getProfile
}