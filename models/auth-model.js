const db = require('../data/dbConfig')

module.exports = {
    all() {
        return db('users')
    },

    findByEmail(email) {
        return db('users')
            .where({email})
            .first()
    },

    findById(id) {
        return db('users')
            .where({id})
            .first()
    },

    async create(user) {
        await db('users').insert(user)
        
        return this.findByEmail(user.email)
    },

    async updateById(id, changes) {
        await db('users')
            .where({id})
            .update(changes)

        return this.findById(id)
    },

    async updateByEmail(email, changes) {
        await db('users')
            .where({email})
            .update(changes)

        return this.findByEmail(email)
    },

    deleteById(id) {
        return db('users')
            .where({id})
            .delete()
    }, 

    deleteByEmail(email) {
        return db('users')
            .where({email})
            .delete()
    }
}