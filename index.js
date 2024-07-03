const express=require('express');
const collection=require("./mongo");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT=8000;
app.get("/",cors(),(req,res)=>{
    return res.send(`Welcome to server ${PORT} `)
})
app.post("/signup",async(req,res)=>
{
    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.listen(PORT,()=>{
    console.log(`Port ${PORT} connected`);
})
