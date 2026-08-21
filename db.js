require('dotenv').config();
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

async function viewInventory() {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.error("Database Error:", error.message);
    throw error; // Throw so the API route catch block can handle it properly
  }
}
async function addProduct(name,price,qty){
  try {
    const [result]=  await pool.query(`INSERT INTO products (name , price ,qty)
      VALUES (?,?,?)
      `,[name ,price,qty]);
   return {id:result.insertid ,name ,price ,qty}
  } catch (error) {
    console.error("Database Error:", error.message);
    throw error; 
  }
}

async function findProduct(ID){
  try {const [result]= await pool.query(`SELECT * FROM products
        WHERE id = ?;
    `,ID)
    return result;
  }catch (error) {
    console.error("Database Error:", error.message);
    throw error; 
  }
  
}

async function deleteProduct(id) {
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [id]);
    return result.affectedRows;
  } catch (error) {
    console.error("Database Error:", error.message);
    throw error;
  }
}
module.exports = { viewInventory,addProduct,findProduct,deleteProduct };