require("dotenv").config();
const express = require("express");
const productApi = express();
const { viewInventory,addProduct,findProduct,deleteProduct } = require('./db'); 
const PORT = process.env.PORT || 3000;

productApi.use(express.json());

productApi.get("/", (req, res) => {
    res.send("Welcome to the Hospital Product Inventory API!");
});


productApi.get("/inventory", async (req, res) => {
    try {
        const inventory = await viewInventory();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch inventory" });
    }
});

productApi.post("/inventory", async (req, res)=>{
    const {name ,price,qty} = req.body;
    if(!name || price === null || qty === null){
        res.status(400).json({
            error: "Please provide name, price, and qty"
        })
    }
    const newProduct = await addProduct(name,Number(price),Number(qty));
    
    res.status(201).json({
        message : "Product added successfully",
        data : newProduct})
})

productApi.get("/inventory/:id", async (req, res)=>{
    try {
         const ID = parseInt(req.params.id);
    const single_product = await findProduct(ID);
    if(single_product.length === 0){
        res.status(404).json("No Product found")
    }
    res.status(200).json(single_product)
    } catch (error) {
        res.status(500).json("Something Broke")
    }
   
})


productApi.delete("/inventory/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid product ID format" });
        }
        const affectedRows = await deleteProduct(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Something broke on the server" });
    }
});

productApi.listen(PORT, ()=>{
    console.log(`Message : Server is listening on port ${PORT}`)
})