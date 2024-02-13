const { getAllProducts, postProduct } = require('../controllers/productControllers');

const router = require('express').Router();


router.route('/').get(getAllProducts).post(postProduct);


module.exports = router;