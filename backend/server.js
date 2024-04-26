const express=require("express")
const app=express()
const dataConection=require("./db")
const userControler = require("./routes/user.route")
var cors = require("cors")
const dataControler = require("./routes/data.route")
const { authentication } = require("./middleware/authentication")
app.use(cors())
app.use(express.json())


app.use("/user",userControler)

app.use("/data",dataControler)

app.get('/',(req,res)=>{
    res.send("haii")
})


app.listen(1200,async()=>{
    try{
        await dataConection
         console.log("db conected")
    }
    catch(err){
        console.log(err)
    }

    console.log("running on 1200.........")

})