require("dotenv").config();
const express = require("express");
const productItems = require("./productInventory");
const productApi = express();

const PORT = process.env.PORT ;


productApi.use(express.json())  // This is my middleware

productApi.get("/", (req, res) => {
    res.send("Welcome to the Hospital Product Inventory API!");
});

productApi.get("/inventory", (req, res)=>{
    res.status(200).json(productItems);
})

productApi.post("/product", (req, res)=>{
    // Do something
})

productApi.patch("/product/:id", (req, res)=>{
    // Do something
})

productApi.delete("/product/:id", (req, res)=>{
    //Do something
})

productApi.listen(PORT, ()=>{
    console.log(`Message : Server is listening on port ${PORT}`)
})