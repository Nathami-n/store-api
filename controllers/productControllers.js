const Product = require("../models/productsModel");
const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
    products = await Product.find(queryObject);
    return res.status(200).json({ products, nbHits: products.length });
  }

  products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

const postProduct = async (req, res) => {
  try {
    const task = await Product.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllProducts,
  postProduct,
};
