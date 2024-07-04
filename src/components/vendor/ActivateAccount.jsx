import React, { useRef, useState } from 'react'
import { FiXCircle } from 'react-icons/fi'
import { currentUser } from '../../utils/getUser';
import { toast } from 'react-toastify';
import { usePayWithMonnifyPayment } from 'react-monnify-ts';
import { monnifyConfig } from '../../utils/monnifyConfig';
import { handleActivateAccount } from '../../api';
import { getUser } from '../../utils/refreshGetUser';

const ActivateAccount = () => {
  const [showOption, setShowOption] = useState(false)
  const [amount, setAmount] = useState(58)
  const info = useRef();

  // Monnify Setup
  const config = monnifyConfig(10000, undefined, currentUser.managerFullname, currentUser.emailAddress, "Activation Fee", currentUser.managerPhone)
  const handleMonnifyPayment = usePayWithMonnifyPayment(config);


  // Function to activate account via metanosdog
  const activateViaMeta = async () => {
    info.current = toast.info("Activating account...", { autoClose: false });
    if (currentUser.forexBalance[0].metanosdog < amount) {
      toast.dismiss(info.current)
      toast.warning("You don't have enough metanosdog to activate your account! Please purchase and try again.")
      return
    }

    const res = await handleActivateAccount(currentUser._id, 'meta', amount)
    if (res.status == "success") {
      toast.dismiss(info.current)
      toast.success("Your account has been activated!")
      getUser()

      setTimeout(() => { window.location.reload() }, 3000)
    } else {
      toast.error(res)
    }
  }


  const onLoadStart = () => { }
  const onLoadComplete = () => { }
  const onComplete = (res) => {
    //Implement what happens when the transaction is completed
    (async function () {
      const res = await handleActivateAccount(currentUser._id, "fiat", amount)
      if (res.status == "success") {
        toast.dismiss(info.current)
        toast.success("Your account has been activated!")
        getUser()

        setTimeout(() => { window.location.reload() }, 3000)
      } else {
        toast.error(res)
      }
    }())
  }

  const activateViaFiat = () => {
    info.current = toast.info("Activating account...", { autoClose: false });
    handleMonnifyPayment(onLoadStart, onLoadComplete, onComplete)
  }

  return (
    <main>
      {showOption ? (
        <section className='relative'>
          <div className='flex items-center gap-2'>
            <button onClick={() => activateViaMeta()} className='mt-7 text-gray-600 bg-white p-3 rounded w-56 hover:scale-95 hover:shadow-lg transition duration-700 font-semibold'>Pay with Metanosdog 🪙</button>

            <button onClick={() => activateViaFiat()} className='mt-7 text-gray-600 bg-white p-3 rounded w-48 hover:scale-95 hover:shadow-lg transition duration-700'>Pay with Fiat 💲</button>
          </div>
          <FiXCircle className='absolute top-3 left-full cursor-pointer hover:animate-spin' size={20} onClick={() => setShowOption(false)} title='Close option' />
        </section>
      ) : <button onClick={() => setShowOption(true)} className='mt-7 text-gray-600 bg-white p-3 rounded w-48 hover:scale-95 hover:shadow-lg transition duration-700'>Activate account 🚥</button>}
    </main>
  )
}

export default ActivateAccount