const express = require("express");
const { registerUser, loginUser,getProfile,getUsers,createContact } = require("../controllers/controller");
const router = express.Router();
const cors = require('cors')

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/createContact',createContact)
router.get('/profile',getProfile)
router.get('/users',getUsers);



module.exports=router