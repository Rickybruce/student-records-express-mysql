# Product Inventory API

A Node.js and Express RESTful API for managing a product inventory database powered by MySQL.

## Features

- **Get All Products**: Retrieve the list of all inventory items.
- **Get Product by ID**: Fetch specific product details using its unique ID.
- **Add Product**: Insert new products into the inventory database.
- **Delete Product**: Remove products from the inventory by ID.
- **Environment Configuration**: Easy configuration using `.env` files.
- **Database Connection Pooling**: Built using `mysql2/promise` for asynchronous, promise-based query management.

---

## Tech Stack

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5.x)
- **Database**: [MySQL](https://www.mysql.com/)
- **Database Driver**: [`mysql2`](https://www.npmjs.com/package/mysql2)
- **Environment Management**: [`dotenv`](https://www.npmjs.com/package/dotenv)
- **Development Tool**: [`nodemon`](https://www.npmjs.com/package/nodemon)

---

## Prerequisites

Before setting up the project, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MySQL Server](https://dev.mysql.com/downloads/installer/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/Rickybruce/product_inventory_api.git](https://github.com/Rickybruce/product_inventory_api.git)
cd product_inventory_api