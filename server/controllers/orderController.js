const Order = require('../models/Order');

exports.createOrder = async(req, res) => {
    try {
        const data = req.body;

        const order = await Order.create(data)
        res.status(200).json({order, status: "success"})
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getOrders = async(req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getUserOrder = async(req, res) => {
    try {
        const {userId} = req.params;

        const order = await Order.find({ user: userId })
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.cancelOrder = async(req, res) => {
    try {
        const {orderId} = req.params;

        const order = await findByIdAndUpdate(orderId, { dispatched: "cancelled" }, { new: true });
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.orderSuccessful = async(req, res) => {
    try {
        const {orderId} = req.params;

        const order = await findByIdAndUpdate(orderId, {$set: { dispatched: "success" }}, { new: true });
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.removeOrder = async(req, res) => {
    try {
        const {orderId} = req.params;

        const order = await Order.findByIdAndRemove(orderId)
        res.status(200).json({order, status: "success"})
    } catch (error) {
        res.status(500).json({error})
    }
}