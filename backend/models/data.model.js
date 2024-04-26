const mongoose=require("mongoose")
const DataSchema=mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    mobile:{type:String , required:true},
    designation:{type:String , required:true},
    gender:{type:String , required:true},
    update:{type:String , required:true},
    course:{type:Array ,required:true},
    image:{type:String , required:true},
})

const DataModel=mongoose.model("employ",DataSchema)

module.exports={DataModel}