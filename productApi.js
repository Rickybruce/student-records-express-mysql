require("dotenv").config();
const express = require("express")
const productApi = express();

const PORT = process.env.PORT ;

productApi.use(express.json())  // This is my middleware

productApi.get("/product", ()=>{
    // Do something
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