import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleUserLogin } from "../api";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const submitBtn = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");
    submitBtn.current.classList.add("rounded-full");
    submitBtn.current.classList.add("text-black");

    const data = {
      email,
      password,
    };

    const res = await handleUserLogin(data);

    if (res.user) {
      localStorage.setItem("user", JSON.stringify(res.user));
      // navigate("/user-dashboard");
      window.location.href = '/user-dashboard'
      setEmail("");
      setPassword("");

      submitBtn.current.innerHTML = "Sign In";
      submitBtn.current.classList.remove("animate-pulse");
      submitBtn.current.classList.remove("rounded-full");
      submitBtn.current.classList.remove("text-black");
    } else {
      toast.error(res.response.data.message);
      submitBtn.current.innerHTML = "Sign In";
      submitBtn.current.classList.remove("animate-pulse");
      submitBtn.current.classList.remove("rounded-full");
      submitBtn.current.classList.remove("text-black");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full bg-green-50">
        <div className="w-full justify-center flex px-10 md:px-72 h-screen items-center">
          <div className="w-[30rem] bg-white shadow-lg flex flex-col h-max rounded-lg p-10">
            <h1 className="text-3xl text-green-500">Sign In</h1>
            <p className="text-slate-700 mb-4 text-sm">Provide correct credentials</p>
            <form className="w-full flex flex-col" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your email"
              />

              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 ring-2 ring-green-300 outline-none duration-500 px-3 text-sm font-medium focus:scale-110 mb-3 rounded-full"
                placeholder="Enter your password"
              />

              <button
                ref={submitBtn}
                className="w-full bg-green-500 p-2 font-bold hover:shadow-lg duration-700 mt-4 text-white rounded-full"
              >
                Sign In
              </button>

              <Link
                to="/sign-up"
                className="text-sm text-gray-700 text-center mt-3 hover:text-white duration-700"
              >
                Don't have an account? Sign Up
              </Link>
              
              <Link
                to="/"
                className="text-sm text-blue-700 text-center mt-1 hover:text-white duration-700"
              >
                 Return to shop
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
