require("dotenv").config();
const Product = require("./models/productsModel");
const connectDB = require("./db/connect");
const jsonProducts = require("./products");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    console.log("connection successful");
    await Product.create(jsonProducts);
    process.exit(0);
    
  } catch (e) {
    console.error(e);
  }
};

start();