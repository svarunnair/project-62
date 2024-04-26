const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
     userName:{type:String, required:true},
     email:{type:String, required:true},
     password:{type:String, required:true},
})

const UserModel=mongoose.model("testing",UserSchema)

module.exports={UserModel}