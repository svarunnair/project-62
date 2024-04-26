// const jwt = require('jsonwebtoken');



// const authentication=(req,res,next)=>{
//     console.log("headerCheck",req.headers.authorization)
//     if(!req.headers.authorization){       
//         res.send("Please login again")
//     }
//     const token=req.headers.authorization.split(" ")[1]
//     jwt.verify(token, 'shhhhh', function(err, decoded) {

//         console.log("decoded",decoded)
//         if(err){
//             res.send("Please login againn")
//         }else{
//             req.body.userId=decoded.userId
//             console.log("userIDDDDD",req.body.userId)    
//             next()
//         }     
//       });

// }


// module.exports={authentication}