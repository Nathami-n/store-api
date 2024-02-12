const { getAllProducts } = require('../controllers/productControllers');

const router = require('express').Router();


router.route('/').get(getAllProducts)

module.exports = router;