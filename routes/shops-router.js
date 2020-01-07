const router = require('express').Router({mergeParams: true});
const Shops = require('../models/shops-model')
const authenticate = require("../middleware/authenticate")
const productsRouter = require("../routes/products-router")

// router.use(authenticate)

// GET /api/shops
router.get("/", async function (req, res) {
    try {
        const allShops = await Shops.getAll()
        res.status(200).json({ allShops })
    } catch(e) {
        res.status(500).json({error: "Internal server error."})
        console.error(e)
    }
})

// router.get("/:id", function(req, res) {
    
// })

// /api/shops/id
router.use("/:id/products", productsRouter)

module.exports = router