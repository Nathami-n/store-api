const Product = require('../models/productsModel')
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "success, all products" });
};

const postProduct = async (req, res) => {
    try{
         const task = await Product.create(req.body);
        res.status(200).json({task})
    } catch(err) {
        throw new Error(err);
    }
}

module.exports = {
  getAllProducts,
  postProduct
};
