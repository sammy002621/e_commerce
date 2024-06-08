const express = require("express");
const { registerUser, loginUser,getProfile } = require("../controllers/controller");
const router = express.Router();
const cors = require('cors')

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/profile',getProfile)


module.exports=router