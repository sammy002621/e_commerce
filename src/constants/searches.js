 const searchedData = [
    {
        content:"mask off",
        isRemoved:"true"
    },
    {
        content:"different",
        isRemoved:"false"
    },
    {
        content:"hey there",
        isRemoved:"true"
    },
    {
        content:"parents",
        isRemoved:"true"
    },

]


searchedData.map((search)=>{
   if(search.isRemoved === "true"){
console.log("suggestion removed")

   }else{
console.log(search.content);
   }
})