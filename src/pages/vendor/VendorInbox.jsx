import React, { useEffect, useState } from "react";
import {
  FiCornerDownLeft,
  FiEdit,
  FiPlusCircle,
  FiTrash2,
  FiUploadCloud,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import VendorNav from "../../components/vendor/VendorNav";

const VendorInbox = () => {
  const [isShowForm, setIsShowForm] = useState(false);

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
            <div className="w-full flex justify-end">
              <Link
                to="/vendor-ticket"
                className="bg-orange-400 flex items-center gap-2 p-2 rounded-full md:rounded text-white hover:translate-y-1 duration-500 hover:shadow"
              >
                <button className="hidden md:block">Send message</button>
                <FiPlusCircle size={20} />
              </Link>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="w-full bg-white rounded-md py-3 px-3 flex flex-col gap-1 duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="w-full flex justify-between items-center mb-3">
                  <h1 className="font-bold text-orange-400">Alan Mask</h1>
                  <p className="text-xs text-gray-400">12:00 AM</p>
                </div>{" "}
                <hr />
                <p className="mt-3 w-full text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <div className="flex gap-3 justify-end mt-3">
                  <FiTrash2 className="cursor-pointer duration-700 hover:text-red-400" />
                  <FiCornerDownLeft
                    className="cursor-pointer duration-700 hover:text-sky-400"
                    onClick={() => setIsShowForm(true)}
                  />
                </div>
              </div>

              <div className="w-full bg-white rounded-md py-3 px-3 flex flex-col gap-1 duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="w-full flex justify-between items-center mb-3">
                  <h1 className="font-bold text-orange-400">Alan Mask</h1>
                  <p className="text-xs text-gray-400">12:00 AM</p>
                </div>{" "}
                <hr />
                <p className="mt-3 w-full text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <div className="flex gap-3 justify-end mt-3">
                  <FiTrash2 className="cursor-pointer duration-700 hover:text-red-400" />
                  <FiCornerDownLeft
                    className="cursor-pointer duration-700 hover:text-sky-400"
                    onClick={() => setIsShowForm(true)}
                  />
                </div>
              </div>

              <div className="w-full bg-white rounded-md py-3 px-3 flex flex-col gap-1 duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <div className="w-full flex justify-between items-center mb-3">
                  <h1 className="font-bold text-orange-400">Alan Mask</h1>
                  <p className="text-xs text-gray-400">12:00 AM</p>
                </div>{" "}
                <hr />
                <p className="mt-3 w-full text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <div className="flex gap-3 justify-end mt-3">
                  <FiTrash2 className="cursor-pointer duration-700 hover:text-red-400" />
                  <FiCornerDownLeft
                    className="cursor-pointer duration-700 hover:text-sky-400"
                    onClick={() => setIsShowForm(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Show message */}
        {isShowForm ? (
          <div className="w-full flex justify-center duration-500">
            <div className="w-96 md:w-[50rem] flex flex-col absolute top-28 bg-orange-400 p-16 mx-96 rounded shadow-xl border-2">
              <div className="w-full flex justify-end">
                <span
                  onClick={() => setIsShowForm(false)}
                  className="p-1 bg-red-400 text-white w-6 h-6 flex justify-center items-center rounded-full hover:bg-red-500 cursor-pointer duration-500"
                >
                  &times;
                </span>
              </div>
              <h1 className="font-bold text-xl text-white mb-3">Message</h1>
              <hr />
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem corporis praesentium perferendis explicabo, ipsum
                laboriosam asperiores, tempore nulla ratione harum sapiente
                atque, cupiditate expedita natus? Sunt aperiam sapiente
                accusamus esse!
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default VendorInbox;
