import React, { useEffect, useState } from "react";
import { FiSettings, FiUserX } from "react-icons/fi";
import VendorNav from "../../components/vendor/VendorNav";
import { handleVendorUpdate } from "../../api";
import { toast } from "react-toastify";


const VendorSettings = () => {
  const [currentVendor, setCurrentVendor] = useState(
    JSON.parse(localStorage.getItem("vendor"))
  );

  const [shopName, setShopName] = useState(currentVendor?.shopName);
  const [emailAddress, setEmailAddress] = useState(currentVendor?.emailAddress);
  const [managerPhone, setManagerPhone] = useState(currentVendor?.managerPhone);
  const [password, setPassword] = useState(currentVendor?.password);

  const handleUpdateProfile = async() => {
    const data = {
      shopName,
      emailAddress,
      managerPhone,
      password
    }

    const res = await handleVendorUpdate(currentVendor._id, data)
    if (res.status === "success") {
      toast.success('Profile updated successfully!')
      localStorage.setItem("vendor", JSON.stringify(res.vendor));
    } else {
      toast.error('Failed to update profile. Try again!')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="w-full bg-[#edf4f6] min-h-screen"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="w-full flex">
          <VendorNav />

          {/* Main content */}
          <div className="main w-full py-7 px-5 md:px-6 lg:px-14 flex flex-col items-start gap-8 md:ml-48 ml-10">
            <div className="w-full">
              <h1 className="text-2xl font-bold ml-10">Settings</h1>

              {/* Head Section with background */}
              <div className="w-full py-7">
                <div className="w-full bg-gradient-to-tl from-gray-200 to-orange-300 h-44 md:h-56 rounded-tl-[5rem]"></div>
                <div className="w-full flex justify-between px-8 items-center">
                  <div className="flex gap-4">
                    <div className="hidden md:flex justify-center items-center p-9 border-2 border-white mt-[-34px] bg-gray-100 shadow-lg rounded-full">
                      <FiUserX size={40} />
                    </div>
                    <div className="text mt-3">
                      <h1 className="text-xl">Profile</h1>
                      <p className="text-gray-500 text-sm">
                        Update your profile and shop details
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="border-2 p-1 rounded text-sm hover:translate-y-1 duration-500">
                      Cancel
                    </button>
                    <button onClick={handleUpdateProfile} className="bg-orange-400 text-sm p-1 rounded text-white hover:translate-y-1 duration-500">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full py-5 flex flex-col px-10 gap-7">
                <div className="w-full flex justify-between">
                  <p className="w-full">Shop name</p>
                  <input
                    type="text"
                    defaultValue={currentVendor?.shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full p-1 text-sm rounded bg-transparent outline-none ring-2 ring-orange-200"
                  />
                </div>

                <div className="w-full flex justify-between">
                  <p className="w-full">Your email</p>
                  <input
                    type="email"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    defaultValue={currentVendor?.emailAddress}
                    className="w-full p-1 text-sm rounded bg-transparent outline-none ring-2 ring-orange-200"
                  />
                </div>

                <div className="w-full flex justify-between">
                  <p className="w-full">Manager phone number</p>
                  <input
                    type="text"
                    onChange={(e) => setManagerPhone(e.target.value)}
                    defaultValue={currentVendor?.managerPhone}
                    className="w-full p-1 text-sm rounded bg-transparent outline-none ring-2 ring-orange-200"
                  />
                </div>

                <div className="w-full flex justify-between">
                  <p className="w-full">Password</p>
                  <div className="w-full flex gap-2 items-center">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      defaultValue={currentVendor?.password.toString().substr(0, 15)}
                      disabled
                      className="w-full p-1 text-sm rounded bg-transparent outline-none ring-2 ring-orange-200"
                    />
                    <FiSettings
                      size={17}
                      className="cursor-pointer"
                      title="reset Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorSettings;
