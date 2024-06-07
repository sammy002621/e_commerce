const express = require("express");
const port = 5000;
const app = express();

app.use('/app',require('../server/routes/route'))


app.listen(port,()=>console.log(`server running on port:${port}`))