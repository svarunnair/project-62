const {Router}=require("express")
const {DataModel}=require("../models/data.model")
const dataControler=Router()


dataControler.post('/',async(req,res)=>{
    const {name,email,update,mobile,designation,gender,course,image} =req.body
    const data= await DataModel({
        name,
        email,
        mobile,
        update,
        designation,
        gender,
        course,
        image
    })
    try{
        data.save()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})


dataControler.get('/',async(req,res)=>{
    try{
        const data= await DataModel.find()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})


dataControler.patch('/:userId',async(req,res)=>{
     const {userId}=req.params
     const patchData=await DataModel.findOneAndUpdate({_id:userId},{...req.body})
     if(patchData){
        res.send("updated")
     }
     else{
        res.send("couldn't updated")
     }
})

dataControler.delete('/:userId',async(req,res)=>{
    const {userId}=req.params
    try{
        const dataDelete= await DataModel.findByIdAndDelete(userId);
        if(dataDelete){
            res.send("Deleted")
        }
        else{
            res.send("couldn't delete")
        }
    }
    catch(err){
        console.log(err)
    }
})



module.exports=dataControler