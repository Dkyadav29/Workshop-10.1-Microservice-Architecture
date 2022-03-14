const express = require('express')

const app = express()

const port = 8002;

app.get("/topSeller", (req,res) =>{
    let responce = {
        data: {
            item:[
            {
                id:  1, name:'@lazyxSeler'
            },
            {
                id:2, name : '@lazy123'
            }  

        ]
            
        }
    }
            res.status(200).json(responce)
})

app.get("/ ", (req,res) =>{
    
    res.status(200).json({mes :" top called" })
})

app.listen(port,() =>{
    console.log(`topSeller running on http://localhost:${port}`);
})