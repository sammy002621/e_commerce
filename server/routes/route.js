const express = require("express");
const { test } = require("../controllers/controller");
const router = express.Router();
const cors = require('cors')

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
router.get('/test',test)


module.exports=router