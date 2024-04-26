const mongoose=require("mongoose")
const dataConection=mongoose.connect("mongodb+srv://varunsnair1997:c7bNtFB2AH0nED5e@cluster0.pmx9suf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


module.exports=dataConection
