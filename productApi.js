require("dotenv").config();
const express = require("express");
const productItems = require("./productInventory");
const productApi = express();
const db = require('./db')
const PORT = process.env.PORT ;


productApi.use(express.json())  // This is my middleware

productApi.get("/", (req, res) => {
    res.send("Welcome to the Hospital Product Inventory API!");
});

productApi.get("/inventory", (req, res)=>{
    res.status(200).json(productItems);
})

productApi.post("/inventory", (req, res)=>{
    const newProduct = {id : productItems.length+1 , ... req.body};
    productItems.push(newProduct);
    res.status(201).json(newProduct)
})

productApi.patch("/inventory/:id", (req, res)=>{
    const product = productItems.find((items)=>{return items.id === parseInt(req.params.id)});
    if(!product){ return res.status(404).json("message : Product can't be found ")};
    Object.assign(product, req.body);
    res.status(200).json(product)
})

productApi.delete("/inventory/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const initialLength= productItems.length;
    newInventory = productItems.filter((t)=>t.id !== id) 
    if(newInventory.length === initialLength){
        return res.status(404).json({message: "Product not found "})
    }
    res.status(200).json({message: "Product deleted successfully"})
})

productApi.listen(PORT, ()=>{
    console.log(`Message : Server is listening on port ${PORT}`)
})