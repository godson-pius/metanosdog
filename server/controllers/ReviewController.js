const Review = require('../models/Reviews')

exports.addReview = async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.status(200).json({review, status: 'success'})
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.getReviews = async (req, res) => {
    const {productId} = req.params
    try {
        const reviews = await Review.find({productId: productId})

        reviews.length > 0 ? res.status(200).json({
            reviews,
            status: 'success'
        }) : res.status(200).json({message: "No review yet for this product", status: "empty"});
    } catch (error) {
        res.status(500).json({error})
    }
}