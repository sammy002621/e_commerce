 const test = (req,res)=>{
    console.log("connected to the frotend");
    res.json({message:"are you there ?"})
}

module.exports = {
    test
}