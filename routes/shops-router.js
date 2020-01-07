const router = require('express').Router();
const Shops = require('../models/shops-model')
const authenticate = require("../middleware/authenticate")

// router.use(authenticate)

// retrive a list of products for a parti
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

router.get("/:id", function(req, res) {

})

router.post("/")

module.exports = router