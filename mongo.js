const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/react-login")
.then(()=>
{
    console.log("Mongo db connected");
})
.catch(()=>{
    console.log("Connection failed");
})
const newSchema=new mongoose.Schema({
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema);
module.exports=collection;