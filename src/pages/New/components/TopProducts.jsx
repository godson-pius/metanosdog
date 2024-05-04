import React from 'react'
import product1 from '../../../assets/images/product1.jpeg'
import product2 from '../../../assets/images/product2.png'
import product3 from '../../../assets/images/product3.png'
import product4 from '../../../assets/images/product4.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const TopProducts = ({ products }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.9, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
                    viewport={{ once: true }}
                    className="top__products w-full grid grid-cols-1 lg:grid-cols-4 items-center my-5 gap-5 px-2 lg:px-10">
                    {products.length > 0 ? (
                        products.slice(-8).map((product, index) => (
                            <div className="product flex flex-col" key={product._id}>
                                {/* <div className={`product__image bg-[url(${product.productImage})] w-[300px] h-[300px] bg-cover bg-center bg-no-repeat`}></div> */}
                                <img src={product.productImage} alt="Meta Nosdog Product Image" width={300} className='border-2 bg-[#f5f5f5] hover:rounded-3xl hover:shadow-lg hover:scale-105 duration-700' />
                                <p className="category uppercase text-gray-400 text-xs mt-3">{product.productCat}</p>
                                <Link to={`/product/${product.productSlug}`} className='mt-1 font-bold text-lg hover:text-green-500 duration-700'>{ product.productName }</Link>
                                <div className="flex gap-3 items-center">
                                    <p className="price text-[#7AC751]">${Intl.NumberFormat().format(product.productPrice)}</p>
                                    <del className='text-gray-400 text-sm'>${Intl.NumberFormat().format(+product.productPrice + Math.random(10))}</del>
                                </div>
                            </div>
                        ))
                    ) : <p className='text-center col-span-4 text-yellow-900 animate-pulse'>No product yet</p>}




                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default TopProducts