import { useEffect, useState } from "react";
import "./App.css";
import Index from "./routes/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, getProducts } from "./api";
import { addProduct } from "./store/slice/productSlice";
import { addCart } from "./store/slice/cartSlice";

AOS.init();

function App() {
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

  const setStore = async () => {
    const productRes = await getProducts()
    const cartRes = await getUserCart(currentUser?._id)

    
    // Traverse through the response and push the elements
    productRes.forEach((element) => {
      dispatch(addProduct(element))
    })

    cartRes.forEach((element) => {
      dispatch(addCart(element))
    })
  }

  useEffect(() => {
    setStore()
  }, []);

  return (
    <div className="app__container w-full">
      <ToastContainer />
      <Index />
    </div>
  );
}

export default App;
