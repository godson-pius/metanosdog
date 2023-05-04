import React, {useState} from "react";
// import Axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function Newsletter() {
    const [email, setEmail] = useState()
    const [text, setText] = useState("Notify Me")

    // const handleSubmit = async () => {
    //     setText("Please wait...")
    //     const data = {
    //         email
    //     }

    //     try {
    //         await Axios.post('https://eazymarketapi.herokuapp.com/addSubscriber', data)
    //         toast.success('You will start receiving mails from us.')
    //         setText("Notify Me")
    //         setEmail("")
    //     } catch (e) {
    //         toast.error('Failed! Please try again.')
    //         setText("Notify Me")
    //         setEmail("")
    //     }
    // }

    return (
        <>
            <ToastContainer/>
            <div className="w-full text-white py-10 px-8 md:px-20 bg-slate-900">
                <div className="w-full grid md:grid-cols-2 mx-auto">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-bold text-2xl">
                            Want tips & tricks to boost sales?
                        </h1>
                        <p className="text-gray-300">
                            Sign up to our newsletter and stay up to date.
                        </p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                            <input
                                className="p-2 w-full rounded-md text-black outline-none"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                            <button
                                    className="bg-orange-400 w-[200px] rounded-md font-medium p-2 text-white my-2 mx-2">
                                {text}
                            </button>
                        </div>
                        <Link className='text-gray-300 text-sm'>We care about the protection of your data. <span
                            className='text-orange-400'>Read our privacy policy</span></Link>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Newsletter;
