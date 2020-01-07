const db = require('../data/dbConfig')

module.exports = (function usersModel() {
    function all() {
        return db('users')
    }

    function findByEmail(email) {
        return db('users')
            .where({email})
            .first()
    }

    async function create(user) {
        await db('users').insert(user)
        return findByEmail(user.email)
    } 

    async function update(email, changes) {
        await db('users').update(changes).where({email})
        return db('users').where({email})
    }

    function remove(email) {
        return db('users').delete().where({email})
    }

    return {
        all, 
        findByEmail,
        create,
        update,
        remove
    }
})()