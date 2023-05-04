const User = require('../models/User')
const bcrypt = require('bcrypt')

const handleRegistration = async(req, res) => {
    const { firstname, lastname, email, password, shippingAddress } = req.body
    const securePassword = await bcrypt.hash(password, 10)

    try {
        const user = await User.create({ firstname, lastname, email, password: securePassword, shippingAddress })
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

module.exports = { handleRegistration, handleLogin }