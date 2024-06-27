 const searchedData = [
    {
        content:"mocking bird",
        isRemoved:"true"
    },
    {
        content:"the same",
        isRemoved:"false"
    },
    {
        content:"hey there",
        isRemoved:"true"
    },
    {
        content:"parents",
        isRemoved:"false"
    },

]


searchedData.map((search)=>{
   if(search.isRemoved === "true"){
console.log("suggestion removed")

   }else{
console.log(search.content);
   }
})