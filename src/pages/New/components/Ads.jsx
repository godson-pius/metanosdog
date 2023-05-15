import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import block1 from '../../../assets/images/block1.png'
import block2 from '../../../assets/images/block2.png'
import block3 from '../../../assets/images/block3.png'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Ads = () => {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [animation, setAnimation] = useState({})

  useEffect(() => {
    if (inView) {
      setAnimation({ x: 0, scale: 1 })
    }
  }, [inView])
  return (
    <>
      <div className="ads px-20 my-14 flex gap-4" ref={ref}>
        <motion.div
          initial={{ x: -1300, scale: 0.5 }}
          animate={animation}
          transition={{ duration: 0.7, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
          className="block1 w-[956px] h-[511px] p-14"
          style={{ backgroundImage: `url(${block1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <div className="flex flex-col">
            <h3 className='text-[#555555] font-bold text-lg'>Modern Furniture Collections</h3>
            <p className='text-[#7AC751] font-bold'>Starting from $900</p>
            <div className="flex items-center w-24 mt-3 gap-1 text-[#555555]">
              <Link to='/' className='text-sm border-b-2 font-thin'>Read more</Link>
              <FiArrowRight />
            </div>
          </div>


        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ x: 3000, scale: 0.5 }}
            animate={animation}
            transition={{ delay: 0.5, duration: 0.7, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
            className='block2 w-[485px] h-[247px] p-10'
            style={{ backgroundImage: `url(${block2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >


            <div className="flex flex-col">
              <h3 className='text-[#555555] font-bold text-lg'>Geometric Bookcase</h3>
              <p className='text-[#7AC751] font-bold'>Up to 20% discount</p>
              <div className="flex items-center w-24 mt-3 gap-1 text-[#555555]">
                <Link to='/' className='text-sm border-b-2 font-thin'>Read more</Link>
                <FiArrowRight />
              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ x: 3000, scale: 0.5 }}
            animate={animation}
            transition={{ delay: 1, duration: 0.7, ease: [0, 0.71, 0.2, 1.01], scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 } }}
            className='block3 w-[485px] h-[247px] p-10'
            style={{ backgroundImage: `url(${block3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >


            <div className="flex flex-col">
              <h3 className='text-[#555555] font-bold text-lg'>Minimal Sofa collections </h3>
              <p className='text-[#7AC751] font-bold'>Sale upto 40% discount</p>
              <div className="flex items-center w-24 mt-3 gap-1 text-[#555555]">
                <Link to='/' className='text-sm border-b-2 font-thin'>Read more</Link>
                <FiArrowRight />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Ads