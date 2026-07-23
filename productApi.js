require("dotenv").config();
const express = require("express");
const productItems = require("./productInventory");
const productApi = express();

const PORT = process.env.PORT ;
const productItems = require("productInventory.js")

productApi.use(express.json())  // This is my middleware

productApi.get("/inventory", ()=>{
    res.status(200).json(productItems);
})

productApi.post("/product", ()=>{
    // Do something
})

productApi.patch("/product/:id", ()=>{
    // Do something
})

productApi.delete("/product/:id", ()=>{
    //Do something
})

productApi.listen(PORT, ()=>{
    console.log(`Message : Server is listening on port ${PORT}`)
})