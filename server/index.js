const express = require("express");
const dotenv= require("dotenv").config();
const port = process.env.PORT;
const app = express();
const mongoose = require("mongoose");
const uri =process.env.URI;





mongoose.connect(uri)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database not connected"))




app.use('/app',require('../server/routes/route'))


app.listen(port,()=>console.log(`server running on port:${port}`))