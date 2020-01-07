const db = require('../data/dbConfig')

function getAll() {
    return db('products')
}

function getById(id) {
    return db("products").where({id})
}  

function getProductsByShop(shopId) {
    return db("products").where({shop_id: shopId})
}

function insert(shopInfo) {
    return db("products")
        .insert(shopInfo)
        .first()
}

function update(id, changes) {
    return db("products")
        .where({id})
        .update(changes)
}

function remove(id) {
    return db("products")
        .where({id})
        .del()
}

module.exports = {
    getAll,
    getById,
    getProductsByShop,
    insert,
    update,
    remove
}