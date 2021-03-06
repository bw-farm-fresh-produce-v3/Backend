const request = require('supertest')

const server = require('../server')
const db = require('../data/dbConfig')

describe('Environment', () => {
    it('should have a NODE_ENV value of "test"', () => {
        expect(process.env.NODE_ENV).toBe("test")
    })
})

describe('GET /api/users', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    it('should return one user', async () => {
        // register new user
        await request(server)
            .post('/api/auth/register')
            .send({
                email: 'test@test.com',
                password: 'password',
                first_name: "Sean",
                last_name: "Halsberg",
                city: "San Francisco",
                state: "California",
                zip: 94016,
                latitude: 123412.3413421,
                longitude: 234532.215235
            })

        // login new user to get token
        const { body: { token } } = await request(server)
            .post('/api/auth/login')
            .send({
                email: 'test@test.com',
                password: 'password',
            })
            
        let users = await request(server).get('/api/users').set({Authorization: token})
        expect(users.body).toHaveLength(1)
    })

    it('should return a status code of 200', async () => {
         // register new user
        await request(server)
            .post('/api/auth/register')
            .send({
                username: 'Pickle Rick',
                password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
            })

        // login new user to get status
        const { status } = await request(server)
            .post('/api/auth/login')
            .send({
                username: 'Pickle Rick',
                password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
            })
         
        expect(status).toBe(200)
    })
})

describe('Auth Router', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('POST /register', () => {
        it('should return a new user', async () => {
            // register new user
            await request(server)
                .post('/api/auth/register')
                .send({
                    email: 'test@test.com',
                    password: 'password',
                    first_name: "Sean",
                    last_name: "Halsberg",
                    city: "San Francisco",
                    state: "California",
                    zip: 94016,
                    latitude: 123412.3413421,
                    longitude: 234532.215235
                })
        
            // login new user to get token
            const { body: { token } } = await request(server)
                .post('/api/auth/login')
                .send({
                    email: 'test@test.com',
                    password: 'password'
                })
                
                let users =  await request(server).get('/api/users').set({Authorization: token})
                console.log(users)
                expect(users.body).toHaveLength(1)
        })

        it('should return a status code of 201', async () => {
            // register new user
            const { status } = await request(server)
                .post('/api/auth/register')
                .send({
                    email: 'Pickle Rick',
                    password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
                })

            expect(status).toBe(201)
        })

        it('should return a hashed password upon success', async () => {
             // register new user
            const { body: { password } } = await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'Pickle Rick',
                    password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
                })

            expect(password[0]).toBe('$')
            expect(password.length).toBe(60)
        })
    })

    describe('POST /login', async () => {
        it('should return a welcome message', async () => {
            // register new user
            await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'Pickle Rick',
                    password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
                })

            // login new user 
            const { body } = await request(server)
              .post('/api/auth/login')
              .send({
                  username: 'Pickle Rick',
                  password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
              })

            
            expect(body['success']).toBe('Welcome Pickle Rick!')
        })

        it('should return a status code of 200', async () => {
            // register new user
            await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'Pickle Rick',
                    password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
                })

            // login new user to get status code
            const { status } = await request(server)
                .post('/api/auth/login')
                .send({
                    username: 'Pickle Rick',
                    password: 'Look Morty, I\'m a pickle! I\'m Pickle Riiiiiiiick!'
                })
            
            expect(status).toBe(200)
        })
    })
})