const router = require('express').Router({mergeParams: true});
const Products = require('../models/products-model')
const authenticate = require("../middleware/authenticate")

// router.use(authenticate)

// GET /api/shops/3/products
router.get("/", async function (req, res) {
    try {
        console.log("==============ID================", req.params.id)
        const productsForThisShop = await Products.getProductsByShop(req.params.id)
        res.status(200).json({
            products: productsForThisShop
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router