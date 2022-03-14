const express = require('express')

const app = express()

const port = 8001;
 
app.get("/topBuyer", (req,res) =>{
    let responce = {
        data: {
            item:[
            {
                id:  1, name:'@lazyx'
            },
            {
                id:2, name : '@lazy123'
            }  

        ]
            
        }
    }
            res.status(200).json(responce)
})

//   // Create token
//   const token = jwt.sign({ id: responce._id },
//     process.env.TOKEN_KEY, {
//     expiresIn: "1h",
// }
// );
// // save user token
// responce.token = token;


app.get("/ ", (req,res) =>{
    
            res.status(200).json({mes :" top called" })
})

app.listen(port,() =>{
    console.log(`top buyer running on http://localhost:${port}`);
 
 
})