const Cart = require('../models/Cart')

exports.createCart = async(req, res) => {
    try {
        const data = req.body;

        const findCart = await Cart.find({ user: data.user, productName: data.productName })
        if (findCart.length > 0) {
            res.status(200).json({findCart, status: "exists"})
            return
        }

        const cart = await Cart.create(data)
        res.status(200).json({cart, status: "success"})
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getCarts = async(req, res) => {
    try {
        const carts = await Cart.find({})
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getUserCart = async(req, res) => {
    try {
        const {userId} = req.params;

        const cart = await Cart.find({ user: userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.removeCart = async(req, res) => {
    try {
        const {cartId} = req.params;

        const cart = await Cart.findByIdAndRemove(cartId)
        res.status(200).json({cart, status: "success"})
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.clearUserCart = async(req, res) => {
    try {
        const {userId} = req.params;

        const cart = await Cart.deleteMany({ user: userId });
        res.status(200).json({cart, status: "success"})
    } catch (error) {
        res.status(500).json({error})
    }
}