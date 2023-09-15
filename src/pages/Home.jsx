import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api";
import AllCat from "../components/AllCat";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Newsletter from "../components/Newsletter";
import Recommended from "../components/Recommended";
import TopSelling from "../components/TopSelling";
import { addProduct } from "../store/slice/productSlice";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <Info />
        <Hero />
        <TopSelling />
        <Recommended />
        <AllCat />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
