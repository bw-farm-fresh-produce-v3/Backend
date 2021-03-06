const router = require('express').Router({mergeParams: true});
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const authModel = require('../models/auth-model')
const { JWT_SECRET } = require('../config/secrets')

router.post('/register', (req, res) => {
  try {
    bcrypt.hash(req.body.password, 8, async (err, encryptedPw) => {
      if (err) res.status(500).json({error: { message: 'Internal server error.'}})
      else {
        console.log("=====before parsing========", req.body)
        req.body.password_hash = encryptedPw
        delete req.body.password
        req.body.zip = parseInt(req.body.zip)
        console.log("======after parsing========", req.body)
        
        const newUser = await authModel.create(req.body)
        res.status(201).json(newUser)
      }
    })

  } catch(e) {
    res.status(500).json({ error: { message: 'Internal server error.'}})
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await authModel.findByEmail(req.body.email)
    
    bcrypt.compare(req.body.password, user.password_hash, (err, passwordsMatch) => {
      if (err) res.status(500).json({ error: { message: 'Internal server error.'}})
      else {
        if (passwordsMatch) {
          res.status(200).json({
            success: user.first_name ? `Welcome ${user.first_name}!` : `Welcome ${user.email}`,
            user,
            token: generateToken(user)
          })
        } else {
          res.status(400).json({ error: { message: "Invalid password."}})
        }
      }
    })
  } catch(e) {
    res.status(404).json({ error: { message: `No user exists with the email of ${req.body.email}`}})
  }

  function generateToken(user) {
    const payload = {
      email: user.email,
      subject: user.id,
    }
    const options = { expiresIn: '1h' }

    return jwt.sign(payload, JWT_SECRET, options)
  }
});

module.exports = router;
