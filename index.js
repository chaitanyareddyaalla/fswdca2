const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json())
const inventory = [{name:"Laptop",quantity:10},{name:"Smartphone",quantity:20},{name:"Headphones"}]

app.put('/',async(req,res)=>{
    try{
        const UpdateProductQuantity = await inventory.findByIdAndUpdate()
        if(UpdateProductQuantity){
            res.status(201).json({message:"updated quantity"})
        }
        res.json(UpdateProductQuantity)
    }
    catch{
        res.status(400).json({message:"Product dosent exist"})
    }
})

app.delete('/',async(req,res)=>{
   try{ const removeproduct = await inventory.findByIdAndDelete()
    if(removeproduct){
        res.status(201).json({message:"product deleted succesfully"})
    }
    res.json(removeproduct)}catch{
        res.status(400).json({message:"Product not found"})
    }
})


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
