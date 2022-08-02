const express = require('express')
const router = express.Router()
const Users = require('../model/register')

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const { email, password, name, number } = req.body

        const newUser = new Users({
            email: email,
            name: name,
            password: password,
            number: number
        })
        
        const user = await newUser.save()

        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router