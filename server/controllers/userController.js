const BasePrice = require('../models/BasePrice')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const handleGetUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({ user, status: "success" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleGetUser = async (req, res) => {
    const { email } = req.params;
    console.log(email)
    try {
        const user = await User.find({ email: email })
        res.status(200).json({ user, status: "success" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleRegistration = async (req, res) => {
    const data = req.body
    data['password'] = await bcrypt.hash(data.password, 10)

    try {
        const user = await User.create(data)

        const parentUser = await User.findOne({ refId: data.parentId })
        if (parentUser) {
            if (parentUser.generation.length < 7) {
                const newGen = [...parentUser.generation, data.refId]
                const newChild = [...parentUser.children, data.refId]

                // Update children and generation column.
                await User.findByIdAndUpdate(parentUser._id, { $set: { generation: newGen, children: newChild } }, { new: true })

            } else {
                const newChild = [...parentUser.children, data.refId]
                await User.findByIdAndUpdate(parentUser._id, { $set: { children: newChild } }, { new: true })
            }
        }
        res.status(200).json('successful')
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleLogin = async (req, res) => {
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

module.exports = { handleRegistration, handleLogin, handleGetUsers, handleGetUser }