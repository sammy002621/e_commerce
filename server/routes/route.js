const express = require("express");
const { test,registerUser, loginUser } = require("../controllers/controller");
const router = express.Router();
const cors = require('cors')

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
router.get('/test',test)

router.post('/register',registerUser);
router.post('/login',loginUser);


module.exports=router