import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { handleCreateTicket } from "../../api";
import VendorNav from "../../components/vendor/VendorNav";

const VendorTickets = () => {
  const [currentVendor, setCurrentVendor] = useState(
    JSON.parse(localStorage.getItem("vendor"))
  );

  const [subject, setSubject] = useState()
  const [status, setStatus] = useState()
  const [message, setMessage] = useState()

  const sendTicket = async(e) => {
    e.preventDefault()
    const data = {
      sender: currentVendor.shopName,
      emailAddress: currentVendor.emailAddress,
      phoneNumber: currentVendor.managerPhone,
      subject,
      status,
      message
    }
    
    const res = await handleCreateTicket(data);
    if (res.status === "success") {
      toast.success('Ticket created successfully!')
      
      setTimeout(() => {
        toast.info('Our support team will respond as soon as possible!')
      }, 4000);
    } else {
      toast.error('Failed to create ticket. Try again!')
    }
    
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
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
              <h1 className="text-2xl font-bold">Raise Ticket</h1>
              <form className="w-full mt-5 flex flex-col gap-4 py-5" onSubmit={sendTicket}>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-200 focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                  readOnly
                  defaultValue={currentVendor.shopName}
                />

                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 focus:placeholder:text-transparent rounded focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                    placeholder="Subject"
                  />

                  <select
                    className="w-full p-2 rounded focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                    onChange={(e) => setStatus(e.target.value)}
                    defaultValue={"DEFAULT"}
                    required
                  >
                    <option value={"DEFAULT"} disabled>
                      Status
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <textarea
                  rows="9"
                  className="w-full p-2 rounded focus:placeholder:text-transparent focus:ring-2 focus:ring-orange-300 outline-none duration-500 resize-none"
                  placeholder="Type message..."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <div className="flex gap-3 w-full">
                  <button
                    type="submit"
                    className="bg-orange-400 p-2 text-orange-100 rounded hover:translate-y-1 duration-500"
                  >
                    Submit Ticket
                  </button>
                  <button
                    type="reset"
                    className="text-sky-100 bg-sky-400 p-2 rounded hover:translate-y-1 duration-500"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorTickets;
