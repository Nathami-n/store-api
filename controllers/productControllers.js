const Product = require("../models/productsModel");
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const products = await result;
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
