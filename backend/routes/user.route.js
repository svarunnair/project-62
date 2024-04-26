const {Router, application}=require("express")
const {UserModel}=require("../models/user.model")
const userControler=Router()
var jwt = require('jsonwebtoken');


userControler.post('/',async(req,res)=>{
    const {userName,email,password}=req.body
    const user= await UserModel({
        userName,
        email,
        password
    })
    console.log("User,,,,,,,",user)
    try{
        user.save()
        res.send(user)
    }
    catch(err){
        console.log(err)
    }
})

userControler.post('/login',async(req,res)=>{
    const {userName,password}=req.body
    const user= await UserModel.findOne({userName})
    if(user){
        const token = jwt.sign({ username:userName }, 'shhhhh');
        res.send({token})
    }
    else{
        res.send("please login")
    }
})


userControler.get('/',async(req,res)=>{
    
    try{
        const userData= await UserModel.find()
        res.send(userData)
    }
    catch(err){
        console.log(err)
    }
      
})


module.exports=userControler