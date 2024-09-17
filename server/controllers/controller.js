const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")
const Contact = require("../models/contact");





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
        return res.json({error:"password is required and should exist"});
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
const getUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
       console.error(error) 
    }
}


const createContact = async (req,res)=>{
    const {name,email,phone,message}=req.body;
    if(!name){
    console.log("name is required")
    return res.json({error:"name is required"})
    }

    if(!email){
        console.log("email is required")
        return res.json({error:"email is required"})
    }

    if(!message){
        console.log("message is required")
        return res.json({error:"message is required"})
    }

    const contactEmailExist = await Contact.findOne({email})
    const contactPhoneExist = await Contact.findOne({phone})

    if(contactEmailExist || contactPhoneExist) {
        
        console.log("contact already exists")
        return res.json({error:"contact already exists"})}
   

    const contact = await Contact.create({name,email,phone,message})
    if(contact){
 console.log("contact created")
 return res.json({contact})
    }


    
}

module.exports = {
    registerUser,
    loginUser,
    getProfile,
    getUsers,
    createContact
}