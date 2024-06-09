const mongoose = require("mongoose");


const {Schema} =mongoose

const contactSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:false
    },
    message:String
})

const contactModel= mongoose.model("Contact",contactSchema)

module.exports=contactModel