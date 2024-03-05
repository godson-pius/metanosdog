import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleVendorLogin } from "../../api";
import { toast } from "react-toastify";

const VendorSignin = () => {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();

  const submitBtn = useRef();

  // Function to log vendors in
  const handleLogin = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");
    submitBtn.current.classList.add("rounded-full");
    submitBtn.current.classList.add("text-black");

    const data = {
      emailAddress,
      password,
    };

    const res = await handleVendorLogin(data);
    if (res.vendor) {
      localStorage.setItem("vendor", JSON.stringify(res.vendor));

      window.location.href = "/vendor-dashboard";
      setEmailAddress("");
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
    return () => {};
  }, []);

  return (
    <>
      <div className="w-full py-20 bg-gra">
        <div className="w-full justify-center flex px-10 md:px-72">
          <div className="w-full bg-orange-400 flex flex-col items-center rounded p-10">
            <h1 className="text-3xl text-white mb-10"> Vendor Sign In</h1>
            <form className="w-full flex flex-col" onSubmit={handleLogin}>
              <input
                type="emailAddress"
                name="emailAddress"
                id="emailAddress"
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic"
                placeholder="Enter your emailAddress"
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
                className="w-full bg-orange-200 p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-white text-center"
              >
                Sign In
              </button>

              <Link
                to="/vendor-signup"
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

export default VendorSignin;
