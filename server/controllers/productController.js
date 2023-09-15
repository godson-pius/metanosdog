const Product = require("../models/Product");
const cloudinary = require("../utils/cloudinary");

const addProduct = async (req, res) => {
  const {
    vendorId,
    productName,
      productSlug,
    productPrice,
    productCat,
    productImage,
    productDesc,
  } = req.body;

  try {
    // upload the image to cloudinary
        if(productImage){
          const uploadRes =  await cloudinary.uploader.upload(productImage, {upload_preset: "globalMarket"})
            const product = await Product.create({
              vendorId,
              productName,
              productSlug,
              productPrice,
              productCat,
              productImage: uploadRes.secure_url,
              productDesc,
            })

            // const savedProduct = await product.save()
            res.status(200).json("success");
          
        }
    // 
    
   
  } catch (error) {
    res.status(400).json({ message: error });
    /*console.log(error)
    res.status(500).send(error);*/
  }
};
/*router.get("/", async (req, res) => {
  try{
    const products = await Product.find()
    res.status(200).send(products)
  }catch(error){
    res.status(400).json({ message: error });
    /*console.log(error)
    res.status(500).send(error);
  }
});*/

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getVendorProducts = async (req, res) => {
  const { vendorId } = req.params;
  try {
    const products = await Product.find({ vendorId: vendorId });

    products.length > 0
      ? res.status(200).json({ products: products, status: "success" })
      : res
          .status(200)
          .json({ message: "No product with id provided", status: "empty" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const handleUpdateProduct = async (req, res) => {
  const { productId, vendorId, productName, productPrice, productCat, productImage, productDesc } = req.body
  // Check if blog exists
  const product = await Product.findById(productId)

  if(!product) {
      res.status(404).json({ error: "product not found "})
      return
  }
// check for file and move it
  try {
      const updatedProductData = { vendorId, productName, productPrice, productCat, productImage, productDesc }
      const productS = await Product.findByIdAndUpdate(productId, updatedProductData)
      res.status(200).json({product: productS, status: "success"})
  } catch (err) {
      res.status(500).json({
          error: err.message
      })
  }
}

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOneAndDelete({_id: productId});
   
      res.status(200).json({ product: product, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getSingleProduct = async(req, res) => { 
  const { productId } = req.params
  try {
    const product = await Product.findById(productId)
    res.status(200).json({product, status: "success"})
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = { addProduct, getProducts, handleUpdateProduct, getVendorProducts, deleteProduct, getSingleProduct };
