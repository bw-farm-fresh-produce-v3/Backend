const db = require('../data/dbConfig')

function getAll() {
    return db('shops')
}

function getById(id) {
    return db("shops").where({id})
}  

function getProductsThatBelongToShop(id) {
    return db("products")
        .where({shop_id: id})
}

function insert(shopInfo) {
    return db("shops")
        .insert(shopInfo)
        .first()
}

function update(id, changes) {
    return db("shops")
        .where({id})
        .update(changes)
}

function remove(id) {
    return db("shops")
        .where({id})
        .del()
}

module.exports = {
    getAll,
    getById,
    getProductsThatBelongToShop,
    insert,
    update,
    remove
}