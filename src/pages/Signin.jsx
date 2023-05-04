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
      <div className="w-full py-20">
        <div className="w-full justify-center flex px-10 md:px-72">
          <div className="w-full bg-orange-400 flex flex-col items-center rounded p-10">
            <h1 className="text-3xl text-white mb-10">Sign In</h1>
            <form className="w-full flex flex-col" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                placeholder="Enter your email"
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

              <button
                ref={submitBtn}
                className="w-full bg-orange-200 p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-white"
              >
                Sign In
              </button>

              <Link
                to="/sign-up"
                className="text-sm text-gray-700 text-center mt-3 hover:text-white duration-700"
              >
                Don't have an account? Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
