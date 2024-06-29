import React, { useEffect, useState } from "react";
import { Email } from "../../smtp";
import { toast } from "react-toastify";
import UserNav from "../../components/users/UserNav";
import { FiCopy, FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { formatNum } from '../../utils/format';
import Orders from "../../components/users/Orders";
import { copyValue } from "../../utils/copy";
import { UserTeamPerformance } from "../../api";

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const [openAccount, setAccount] = useState(true);
  const [openOrder, setOrder] = useState(false);
  const [openInbox, setInbox] = useState(false);
  const [openLogout, setLogout] = useState(false);
  const [active, setActive] = useState("account");
  const [refProfit, setRefProfit] = useState(0)


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

  const Account = () => {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">
              Account Details
            </h1>
            <div className="flex flex-col lg:flex-row justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Full name
                </span>
                <h2 className="text-gray-500 text-sm md:text-base">
                  {" "}
                  {user ? `${user.firstname} ${user.lastname}` : null}
                </h2>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase">Email</span>
                <h2 className="text-gray-500 text-sm md:text-base"> {user.email}</h2>
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

          <div className="w-full p-5 bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">
              Account Balance
            </h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Metanosdog:
                </span>
                <h2 className="text-slate-800 font-extrabold">{formatNum(user.balance[0].metanosdog)}</h2>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Team Performance:
                </span>
                <h2 className="text-slate-800 font-extrabold">${formatNum(refProfit)}</h2>
              </div>
            </div>
          </div>
          
          <div className="w-full p-5  bg-white rounded duration-700 hover:translate-y-1">
            <h1 className="text-lg border-b-2 mb-5 text-slate-800">
              Downlines
            </h1>
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Total Downliners:
                </span>
                <h2 className="text-slate-800 font-extrabold">{formatNum(user.children.length)}</h2>
              </div>
              
              <div>
                <span className="text-xs text-gray-400 uppercase">
                  Referral Link:
                </span>
                <h2 className="text-sky-500 text-sm md:text-base flex gap-2 items-center">
                  {`https://tradepointnetwork.com/${user.refId}`}
                  <span className="rounded-full border-2 p-2 cursor-pointer hover:animate-pulse hover:border-sky-500 duration-700" title="Copy Link" onClick={() => copyValue(`https://tradepointnetwork.com/${user.refId}`)}>
                    <FiCopy className="text-sky-500" />
                  </span>
                  </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Inbox = () => {
    return (
      <>
      <p className="text-3xl">Coming soon!</p>
        {/* <div className="w-full grid md:grid-cols-2 gap-4 p-3">
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
        </div> */}
      </>
    );
  };

  const handleGetTeamPerformace = async () => {
    const data = {
      id: user._id,
      role: user.role
    }
    const res = await UserTeamPerformance(data)
    if (res.status == 'success') {
      setRefProfit(res.profit)
    }
  }

  useEffect(() => {
    handleGetTeamPerformace();
  }, [])

  return (
    <>
      <div className="w-full my-10 px-10">
        <div className="w-full flex gap-7">
          <UserNav openSection={openSection} active={active} />
          <div className="w-full bg-slate-100 rounde shadow-md p-2">
            {/* Account Section */}
            {openAccount ? <Account /> : null}

            {/* Orders Section */}
            {openOrder ? <Orders userId={user._id} /> : null}

            {/* Inbox Section */}
            {openInbox ? <Inbox /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
