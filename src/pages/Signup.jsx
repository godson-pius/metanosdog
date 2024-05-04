import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleUserReg } from "../api";
import { toast } from "react-toastify";

const Signup = () => {
  const [firstname, setFname] = useState();
  const [lastname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpass, setCpass] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const submitBtn = useRef();
  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");
    submitBtn.current.classList.add("rounded-full");
    submitBtn.current.classList.add("text-black");

    if (cpass !== password) {
      toast.error("Passwords do not match");
      submitBtn.current.innerHTML = "Sign Up";
      submitBtn.current.classList.remove("animate-pulse");
      submitBtn.current.classList.remove("rounded-full");
      submitBtn.current.classList.remove("text-black");
    } else if (password.length < 6) {
      toast.error("Passwords is too weak and must be more 6 characters!");
      submitBtn.current.innerHTML = "Sign Up";
      submitBtn.current.classList.remove("animate-pulse");
      submitBtn.current.classList.remove("rounded-full");
      submitBtn.current.classList.remove("text-black");
    } else {
      const formdata = {
        firstname,
        lastname,
        email,
        password,
        cpass,
        shippingAddress,
      };

      const res = await handleUserReg(formdata);
      if (res === "successful") {
        toast.success("Account have been registered successfully");
        toast.info(<NavigateLogin />, { autoClose: false });
        submitBtn.current.innerHTML = "Sign Up";
        submitBtn.current.classList.remove("animate-pulse");
        submitBtn.current.classList.remove("rounded-full");
        submitBtn.current.classList.remove("text-black");

        // Clean form fields
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setCpass("");
        setShippingAddress("");
      } else if (res === 11000) {
        toast.warn("Oops! This email is already registered!");
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
  };

  const NavigateLogin = () => {
    return (
      <>
        <h1>Please login using link below 👇</h1>
        <button
          className="bg-sky-500 w-full text-white p-1 rounded mt-2"
          onClick={() => navigate("/sign-in")}
        >
          Sign in
        </button>
      </>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full bg-green-50">
        <div className="w-full justify-center flex px-10 md:px-72 h-screen items-center">
          <div className="w-[40rem] bg-white shadow-lg flex flex-col h-max rounded-lg p-10">
          <h1 className="text-3xl text-green-500">Sign In</h1>
            <p className="text-slate-700 mb-4 text-sm">Provide correct details</p>
            <form className="w-full flex flex-col" onSubmit={handleReg}>
              <input
                type="text"
                name="fname"
                id="fname"
                required
                onChange={(e) => setFname(e.target.value)}
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your first name"
              />

              <input
                type="text"
                name="lname"
                id="lname"
                required
                onChange={(e) => setLname(e.target.value)}
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your last name"
              />

              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your email"
              />

              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your password"
              />

              <input
                type="password"
                name="conf_password"
                id="cpass"
                required
                onChange={(e) => setCpass(e.target.value)}
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Confirm password"
              />

              <textarea
                name="shippingaddress"
                id="shippingaddress"
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded"
                placeholder="Enter default shipping address"
                required
                onChange={(e) => setShippingAddress(e.target.value)}
              ></textarea>

              <button
                className="w-full bg-green-500 p-2 font-bold hover:shadow-lg duration-700 mt-4 text-white rounded-full"
                ref={submitBtn}
              >
                Sign Up
              </button>

              <Link
                to="/sign-in"
                className="text-sm text-gray-700 text-center mt-3 hover:text-white duration-700"
              >
                Already have an account? Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
