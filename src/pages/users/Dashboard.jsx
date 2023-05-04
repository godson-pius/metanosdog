import React, { useEffect, useState } from "react";
import { Email } from "../../smtp";
import { toast } from "react-toastify";
import UserNav from "../../components/users/UserNav";
import { FiEdit3, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const [openAccount, setAccount] = useState(true);
  const [openOrder, setOrder] = useState(false);
  const [openInbox, setInbox] = useState(false);
  const [openLogout, setLogout] = useState(false);
  const [active, setActive] = useState("account");

  //fOR Orders Menu
  const [isOpenOrder, setOpenOrder] = useState(true);
  const [isClosedOrder, setClosedOrder] = useState(false);
  const [activeOrderMenu, setOrderMenu] = useState("open-orders");

  // const sendMail = async() => {
  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "goddypius123@gmail.com",
  //     Password: "6F5D134234C9165D1CAD9685003F25772720",
  //     To: "godsonazubuike15@gmail.com",
  //     From: "goddypius123@gmail.com",
  //     Subject: "Check From REACT",
  //     Body: <Message />,
  //   }).then((message) => toast.success(message));
  // };

  const openSection = (_section) => {
    setAccount(false);
    setOrder(false);
    setInbox(false);

    switch (_section) {
      case "account":
        setAccount(true);
        setActive("account");
        break;

      case "order":
        setOrder(true);
        setActive("order");
        break;

      case "inbox":
        setInbox(true);
        setActive("inbox");
        break;

      default:
        break;
    }
  };

  const openOrderSection = (_section) => {
    setOpenOrder(false);
    setClosedOrder(false);

    switch (_section) {
      case "open-orders":
        setOpenOrder(true);
        setOrderMenu("open-orders");
        break;

      case "closed-orders":
        setClosedOrder(true);
        setOrderMenu("closed-orders");
        break;

      default:
        break;
    }
  };

  const setActiveOrderMenu = (menu) => {
    return menu == activeOrderMenu
      ? "border-b-2 border-slate-800 font-bold shadow-lg text-slate-800"
      : null;
  };

  const Account = () => {
    return (
      <>
        <div className="w-full grid md:grid-cols-2 gap-4 p-3">
          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">
              Account Details
            </h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Full name
                </span>
                <h2 className="text-gray-500">
                  {" "}
                  {user ? `${user.firstname} ${user.lastname}` : null}
                </h2>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase">Email</span>
                <h2 className="text-gray-500"> {user.email}</h2>
              </div>
            </div>
          </div>

          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-lg border-b-2 mb-5 text-slate-800 w-64">
                Address Book
              </h1>
              <FiEdit3 className="duration-700 cursor-pointer" />
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Shipping Address:
                </span>
                <h2 className="text-gray-500">{user.shippingAddress}</h2>
              </div>
            </div>
          </div>

          <div className="w-full p-5 col-span-2 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">
              Meta Nosdog
            </h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Balance:
                </span>
                <h2 className="text-slate-800 font-extrabold">800.90</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Orders = () => {
    return (
      <>
        <div className="w-full p-3">
          <div className="bg-white w-full p-5">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">Orders</h1>

            <div className="flex gap-10">
              <button
                onClick={() => openOrderSection("open-orders")}
                className={`text-sm text-gray-400 uppercase ${setActiveOrderMenu(
                  "open-orders"
                )}`}
              >
                open orders
              </button>
              <button
                onClick={() => openOrderSection("closed-orders")}
                className={`text-sm text-gray-400 uppercase ${setActiveOrderMenu(
                  "closed-orders"
                )}`}
              >
                closed orders
              </button>
            </div>

            {isOpenOrder ? (
              <div className="closed-content w-full flex flex-col mt-5">
                <div className="w-full ring-2 ring-gray-200 p-2 mb-5 rounded-full">
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-400 w-20 h-20 rounded-full"></div>
                    <div className="flex flex-col justify-between">
                      <h1 className="uppercase mr-36 font-bold">
                        Blue Light Blocking Computer Glasses Metal Eyewear
                        Frames
                      </h1>
                      <span className="text-sm uppercase text-gray-400">
                        order 1232223
                      </span>

                      <div className="flex mt-3 items-center gap-2">
                        <button className="text-green-800 bg-green-200 p-1 text-sm rounded">
                          Delivered
                        </button>
                        <span className="text-xs uppercase text-slate-800 font-extrabold">
                          on 12/11/2022
                        </span>
                      </div>
                    </div>
                    <FiEye className="mr-5" fontSize={20} />
                  </div>
                </div>
              </div>
            ) : null}

            {isClosedOrder ? (
              <div className="open-content w-full flex flex-col mt-5">
                <div className="w-full ring-2 ring-gray-200 p-2 mb-5 rounded-full">
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-400 w-20 h-20 rounded-full"></div>
                    <div className="flex flex-col justify-between">
                      <h1 className="uppercase mr-36 font-bold">
                        Computer lenses for screen reading in the night late
                        hours
                      </h1>
                      <span className="text-sm uppercase text-gray-400">
                        order 1232223
                      </span>

                      <div className="flex mt-3 items-center gap-2">
                        <button className="text-slate-800 bg-slate-200 p-1 text-sm rounded">
                          Failed Delivery
                        </button>
                        <span className="text-xs uppercase text-slate-800 font-extrabold">
                          on 12/11/2022
                        </span>
                      </div>
                    </div>
                    <FiEye className="mr-5" fontSize={20} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  };

  const Inbox = () => {
    return (
      <>
        <div className="w-full grid md:grid-cols-2 gap-4 p-3">
          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">Inbox</h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Product Information:
                </span>
                <h2 className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  optio odit dolores? Illum, enim? Ipsa, aliquam delectus.
                  Minima, vitae explicabo.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">Inbox</h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Product Information:
                </span>
                <h2 className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  optio odit dolores? Illum, enim? Ipsa, aliquam delectus.
                  Minima, vitae explicabo.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">Inbox</h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Product Information:
                </span>
                <h2 className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  optio odit dolores? Illum, enim? Ipsa, aliquam delectus.
                  Minima, vitae explicabo.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">Inbox</h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Your Product Information:
                </span>
                <h2 className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  optio odit dolores? Illum, enim? Ipsa, aliquam delectus.
                  Minima, vitae explicabo.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full my-10 px-10">
        <div className="w-full flex gap-7">
          <UserNav openSection={openSection} active={active} />
          <div className="w-full bg-slate-100 rounde shadow-md p-2">
            {/* Account Section */}
            {openAccount ? <Account /> : null}

            {/* Orders Section */}
            {openOrder ? <Orders /> : null}

            {/* Inbox Section */}
            {openInbox ? <Inbox /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
