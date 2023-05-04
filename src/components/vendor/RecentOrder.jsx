import React from "react";
import { FiFileText, FiMoreHorizontal } from "react-icons/fi";

const RecentOrder = () => {
  return (
    <>
      <div className="w-full hidden lg:block">
        <div className="recent__order__content w-full flex flex-col gap-4">
          <div className="each w-full bg-white p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-15px]">
            <div className="each__content">
              <h1 className="font-bold text-sm">Nike Air Max 90</h1>
              <p className="text-gray-400 text-xs">$56.34</p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Saturday 2 May, 2022</h1>
              <p className="text-gray-400 text-xs">
                Delivered on Saturday 7 May, 2022
              </p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Alan Hustin</h1>
              <p className="text-gray-400 text-xs">Purchased by user</p>
            </div>

            <div className="each__content flex items-center gap-1 ring-2 ring-green-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-green-100 cursor-pointer duration-500 5 hover:translate-y-1">
              <div className="status w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-gray-400 text-xs">Delivered</p>
            </div>

            <div className="each__content">
              <FiFileText
                size={20}
                title="view receipt"
                className="font-bold cursor-pointer"
              />
            </div>

            <div className="each__content">
              <FiMoreHorizontal
                size={20}
                className="font-bold cursor-pointer"
              />
            </div>
          </div>

          <div className="each w-full bg-white p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-15px]">
            <div className="each__content">
              <h1 className="font-bold text-sm">Nike Air Max 90</h1>
              <p className="text-gray-400 text-xs">$56.34</p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Saturday 2 May, 2022</h1>
              <p className="text-gray-400 text-xs">
                Delivered on Saturday 7 May, 2022
              </p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Alan Hustin</h1>
              <p className="text-gray-400 text-xs">Purchased by user</p>
            </div>

            <div className="each__content flex items-center gap-1 ring-2 ring-red-300 w-28 p-2 rounded-full justify-center hover:text-white hover:bg-red-100 cursor-pointer duration-500 5 hover:translate-y-1">
              <div className="status w-2 h-2 bg-red-400 rounded-full"></div>
              <p className="text-gray-400 text-xs">Failed</p>
            </div>

            <div className="each__content">
              <FiFileText
                size={20}
                title="view receipt"
                className="font-bold cursor-pointer"
              />
            </div>

            <div className="each__content">
              <FiMoreHorizontal
                size={20}
                className="font-bold cursor-pointer"
              />
            </div>
          </div>

          <div className="each w-full bg-white p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-15px]">
            <div className="each__content">
              <h1 className="font-bold text-sm">Nike Air Max 90</h1>
              <p className="text-gray-400 text-xs">$56.34</p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Saturday 2 May, 2022</h1>
              <p className="text-gray-400 text-xs">
                Delivered on Saturday 7 May, 2022
              </p>
            </div>

            <div className="each__content">
              <h1 className="font-bold text-sm">Alan Hustin</h1>
              <p className="text-gray-400 text-xs">Purchased by user</p>
            </div>

            <div className="each__content flex items-center gap-1 ring-2 ring-yellow-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-yellow-100 cursor-pointer duration-500 5 hover:translate-y-1">
              <div className="status w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-xs">In progress</p>
            </div>

            <div className="each__content">
              <FiFileText
                size={20}
                title="view receipt"
                className="font-bold cursor-pointer"
              />
            </div>

            <div className="each__content">
              <FiMoreHorizontal
                size={20}
                className="font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full grid md:grid-cols-2 lg:hidden gap-3">
          <div className="bg-white p-3 rounded">
            <div className="status w-3 h-3 bg-green-400 mb-2 rounded-full"></div>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold">Nike Air Max</h1>
              <FiMoreHorizontal />
            </div>
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-gray-400 text-xs">$45</p>
            </div>

            <hr />
            <p className="text-sm mt-2">Alan Man</p>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm text-green-400">Delivered on Saturday</p>
              <FiFileText />
            </div>
          </div>

          <div className="bg-white p-3 rounded">
            <div className="status w-3 h-3 bg-yellow-400 mb-2 rounded-full animate-pulse"></div>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold">Nike Air Max</h1>
              <FiMoreHorizontal />
            </div>
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-gray-400 text-xs">$45</p>
            </div>

            <hr />
            <p className="text-sm mt-2">Alan Man</p>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm text-yellow-400">In Progress</p>
              <FiFileText />
            </div>
          </div>

          <div className="bg-white p-3 rounded">
            <div className="status w-3 h-3 bg-red-400 mb-2 rounded-full"></div>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold">Nike Air Max</h1>
              <FiMoreHorizontal />
            </div>
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-gray-400 text-xs">$45</p>
            </div>

            <hr />
            <p className="text-sm mt-2">Alan Man</p>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm text-red-400">Failed to deliver</p>
              <FiFileText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
