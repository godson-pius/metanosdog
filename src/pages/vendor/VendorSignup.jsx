import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { handleGenerateRefId, handleVendorReg, handleVendorSignInPayment } from "../../api";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const VendorSignup = () => {
    const { ref } = useParams()
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [managerFullname, setManagerFullname] = useState("");
    const [managerPhone, setManagerPhone] = useState("");
    const [additionalPhone, setAdditionalPhone] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [cemailAddress, setCEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [refId, setRefId] = useState(handleGenerateRefId());
    const [referralId, setReferralId] = useState()



    const navigate = useNavigate();
    const submitBtn = useRef();

    // Flutterwave
    const config = {
        public_key: 'FLWPUBK_TEST-3e1a371f3d4cf1fbe79c81aa128a13ea-X',
        tx_ref: Date.now(),
        amount: 3000,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: `${emailAddress}`,
            phone_number: `${additionalPhone}`,
            name: `${shopName}`,
        },
        customizations: {
            title: 'Meta Nosdog',
            description: 'Vendor Registration',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);
    const [paid, setPaid] = useState("")

    const handleReg = async (e) => {
        e.preventDefault();

        if (paid === 'true') {
            submitBtn.current.innerHTML = "Please wait...";
            submitBtn.current.classList.add("animate-pulse");
            submitBtn.current.classList.add("rounded-full");
            submitBtn.current.classList.add("text-black");

            if (cemailAddress !== emailAddress) {
                toast.error("Emails do not match");
                submitBtn.current.innerHTML = "Sign Up";
                submitBtn.current.classList.remove("animate-pulse");
                submitBtn.current.classList.remove("rounded-full");
                submitBtn.current.classList.remove("text-black");
            } else if (cpassword !== password) {
                toast.error("Passwords do not match!");
                submitBtn.current.innerHTML = "Sign Up";
                submitBtn.current.classList.remove("animate-pulse");
                submitBtn.current.classList.remove("rounded-full");
                submitBtn.current.classList.remove("text-black");
            } else if (password.length < 8) {
                toast.error("Passwords is too weak");
                submitBtn.current.innerHTML = "Sign Up";
                submitBtn.current.classList.remove("animate-pulse");
                submitBtn.current.classList.remove("rounded-full");
                submitBtn.current.classList.remove("text-black");
            } else if (additionalPhone === managerPhone) {
                toast.error("Please provide different phone numbers");
                submitBtn.current.innerHTML = "Sign Up";
                submitBtn.current.classList.remove("animate-pulse");
                submitBtn.current.classList.remove("rounded-full");
                submitBtn.current.classList.remove("text-black");
            } else {
                const formdata = {
                    shopName,
                    shopType,
                    managerFullname,
                    managerPhone,
                    additionalPhone,
                    emailAddress,
                    refId,
                    password,
                };

                const res = await handleVendorReg(formdata);
                if (res === "success") {
                    toast.success("Your vendor account have been registered successfully");
                    setTimeout(() => {
                        navigate('/vendor-signin')
                    }, 2000)
                } else if (res === 11000) {
                    toast.warn("Oops! This account exists!");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                } else {
                    toast.error("Please check input fields and try again!");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                }
            }
        } else {
            handlePayment()
        }
    };

    const NavigateLogin = () => {
        return (
            <>
                <h1>Please login using link below 👇</h1>
                <button
                    className="bg-sky-500 w-full text-white p-1 rounded mt-2"
                    onClick={() => navigate("/vendor-signin")}
                >
                    Sign in
                </button>
            </>
        );
    };

    const handlePayment = () => {
        handleFlutterPayment({
            callback: async (response) => {
                setPaid('true')
                submitBtn.current.innerHTML = "Please wait...";
                submitBtn.current.classList.add("animate-pulse");
                submitBtn.current.classList.add("rounded-full");
                submitBtn.current.classList.add("text-black");

                if (cemailAddress !== emailAddress) {
                    toast.error("Emails do not match");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                } else if (cpassword !== password) {
                    toast.error("Passwords do not match!");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                } else if (password.length < 8) {
                    toast.error("Passwords is too weak");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                } else if (additionalPhone === managerPhone) {
                    toast.error("Please provide different phone numbers");
                    submitBtn.current.innerHTML = "Sign Up";
                    submitBtn.current.classList.remove("animate-pulse");
                    submitBtn.current.classList.remove("rounded-full");
                    submitBtn.current.classList.remove("text-black");
                } else {
                    const formdata = {
                        shopName,
                        shopType,
                        managerFullname,
                        managerPhone,
                        additionalPhone,
                        emailAddress,
                        password,
                    };

                    const res = await handleVendorReg(formdata);
                    if (res === "success") {
                        toast.success("Your vendor account have been registered successfully");
                        setTimeout(() => {
                            navigate('/vendor-signin')
                        }, 2000)
                    } else if (res === 11000) {
                        toast.warn("Oops! This account exists!");
                        submitBtn.current.innerHTML = "Sign Up";
                        submitBtn.current.classList.remove("animate-pulse");
                        submitBtn.current.classList.remove("rounded-full");
                        submitBtn.current.classList.remove("text-black");
                    } else {
                        toast.error("Please check input fields and try again!");
                        submitBtn.current.innerHTML = "Sign Up";
                        submitBtn.current.classList.remove("animate-pulse");
                        submitBtn.current.classList.remove("rounded-full");
                        submitBtn.current.classList.remove("text-black");
                    }
                }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
                toast.warn('Failed to register! Please make payment')
            },
        });
    }

    const getReferralId = () => {
        (ref) ? setReferralId(ref) : console.log('Not referred');
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
        getReferralId()
    }, []);

    return (
        <>
            <div className="w-full py-20">
                <div className="w-full justify-center flex px-10 md:px-72">
                    <div className="w-full bg-orange-400 flex flex-col items-center rounded p-10">
                        <h1 className="text-3xl text-white mb-10">Seller Center</h1>
                        <form className="w-full flex flex-col" onSubmit={handleReg}>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Enter shop name"
                                onChange={(e) => setShopName(e.target.value)}
                                required
                            />
                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                Choose a unique name for your online shop: this is the name that
                                will appear on the Global marketplace! It is forbidden to use a
                                registered trademark in your shop name without the brand
                                authorization.
                            </p>

                            <select
                                name="type"
                                id="type"
                                onChange={(e) => setShopType(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                            >
                                <option value="null">
                                    Are an individual or Business Entity / Company
                                </option>
                                <option value="individual">Individual</option>
                                <option value="business">Registered business name</option>
                                <option value="company">Company</option>
                            </select>

                            <input
                                type="text"
                                name="managerfname"
                                id="managerfname"
                                onChange={(e) => setManagerFullname(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Enter account manager full name"
                            />

                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                Your name or the name of the person in your team who will manage
                                your account. This is the contact we will primarily use to
                                contact you.
                            </p>

                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                onChange={(e) => setManagerPhone(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Enter account manager phone number"
                            />

                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                When we need to contact you urgently, this is the number we will
                                call.
                            </p>

                            <input
                                type="number"
                                name="aphone"
                                id="aphone"
                                onChange={(e) => setAdditionalPhone(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Additional phone number"
                            />

                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                Another number where we can reach you ?
                            </p>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Enter your email address"
                            />

                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                Your account will be linked to this email address and we will
                                use it to send all our communications.
                            </p>

                            <input
                                type="email"
                                name="cemail"
                                id="cemail"
                                onChange={(e) => setCEmailAddress(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                                placeholder="Confirm email address"
                            />

<input
                                type="text"
                                name="referralId"
                                id="referralId"
                                readOnly
                                value={referralId}
                                onChange={(e) => setReferralId(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic mb-3"
                                placeholder="RefId"
                            />

                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic mb-3"
                                placeholder="Enter your password"
                            />

                            <p className="text-xs mb-3 text-gray-700 font-bold">
                                At least 8 characters containing a capital letter, a lower
                                letter and a numeric character
                            </p>

                            <input
                                type="password"
                                name="conf_password"
                                id="conf_password"
                                onChange={(e) => setCPassword(e.target.value)}
                                required
                                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic"
                                placeholder="Confirm password"
                            />

                            <div className="w-full flex gap-2 justify-center">
                                <input
                                    type="checkbox"
                                    className="mt-3"
                                    name="accept"
                                    id="accept"
                                    required
                                />

                                <span className="text-sm mt-3 font-bold">
                                    I have read and accepted the{" "}
                                    <Link
                                        to="/"
                                        className="text-orange-100 hover:text-orange-800 duration-500"
                                    >
                                        e-contract Meta Nosdog
                                    </Link>
                                </span>
                            </div>

                            <button
                                ref={submitBtn}
                                className="w-full bg-orange-200 p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-white hover:bg-orange-500"
                            >
                                Sign Up
                            </button>
                            <Link
                                to="/vendor-signin"
                                className="text-sm text-gray-700 text-center mt-3 hover:text-white duration-700"
                            >
                                Already have an account? Sign In
                            </Link>
                        </form>

                        {/*<button onClick={handlePayment}>*/}
                        {/*  Test Payment*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VendorSignup;
