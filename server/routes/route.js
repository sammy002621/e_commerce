const express = require("express");
const { registerUser, loginUser } = require("../controllers/controller");
const router = express.Router();
const cors = require('cors')

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

router.post('/register',registerUser);
router.post('/login',loginUser);


module.exports=router