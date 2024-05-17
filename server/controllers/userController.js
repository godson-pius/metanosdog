const User = require('../models/User')
const bcrypt = require('bcrypt')

const handleGetUsers = async(req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({user, status: "success" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleRegistration = async(req, res) => {
    const data = req.body
    data['password'] = await bcrypt.hash(data.password, 10)

    try {
        const user = await User.create(data)
        res.status(200).json('successful')
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleLogin = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ message: 'No user found! Try registering' })
            return
        }
        
        if (!bcrypt.compareSync(password, user.password)) {
            res.status(404).json({ message: "Invalid Credentials" })
            return
        }

        res.status(200).json({ user })
        
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { handleRegistration, handleLogin, handleGetUsers }