import React, { useEffect, useState, useRef } from "react";
import { FiEdit, FiPlusCircle, FiTrash2, FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
import VendorNav from "../../components/vendor/VendorNav";
import { addProduct, deleteProduct, getVendorProducts, updateProduct } from "../../api";
import { toast } from "react-toastify";
import { currentUser } from "../../utils/getUser";
import ActivateAccount from "../../components/vendor/ActivateAccount";
import { getUser } from "../../utils/refreshGetUser";

const Products = () => {

  const currentVendor = currentUser;
  const [isShowForm, setIsShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [isProducts, setIsProducts] = useState(true);
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const submitBtn = useRef()
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleProductNameAndSlug = (e) => {
    const _productName = e.target.value
    setProductName(_productName)

    setProductSlug(_productName.replace(/ /g, '-'));
  }

  const handleProductImage = (e) => {
    const file = e.target.files[0];
    setProductImage(file);

    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  };

  const handleVendorProducts = async () => {
    const res = await getVendorProducts(currentVendor._id);
    if (res.status === "empty") {
      setIsProducts(false);
    } else {
      setProducts(res.products);
      setIsProducts(true);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    submitBtn.current.innerHTML = "Please wait...";
    submitBtn.current.classList.add("animate-pulse");
    submitBtn.current.classList.add("text-orange-500");

    const data = {
      vendorId: currentVendor._id,
      productName,
      productSlug,
      productPrice,
      productCat,
      productImage,
      productDesc
    }

    const res = await addProduct(data);
    if (res === 'success') {
      toast.success("Your product was added successfully!");

      submitBtn.current.innerHTML = "Publish product";
      submitBtn.current.classList.remove("animate-pulse");
      submitBtn.current.classList.remove("rounded-full");
      submitBtn.current.classList.remove("text-orange-500");

      setProductName("")
      setProductSlug("")
      setProductPrice("")
      setProductCat("")
      setProductDesc("")
      setProductImage("")

      setIsShowForm(false);

      setTimeout(() => {
        /*toast.info(`${productName} have been published on Marketplace.`) */
        toast.info(productName + `  have been published on Marketplace.`)
      }, 11000);
    }

  }

  const handleChoice = async (choice, id) => {
    if (choice === true && id !== undefined) {
      const res = await deleteProduct(id);
      if (res.status === 'success') {
        toast.success("Product was deleted successfully!");
      } else {
        toast.error("Failed! Please try again");
      }
    }
  }

  const handleDeleteProduct = async (_productName, _productId) => {
    toast.info(<DelOption pname={_productName} pId={_productId} />, { autoClose: false });
  }

  const DelOption = ({ pname, pId }) => {
    return (
      <>
        <h1>Are you sure you delete <i>{pname}</i>?</h1>
        <div className="flex gap-2">
          <button
            className="bg-red-500 w-full text-white p-1 rounded mt-2"
            onClick={() => handleChoice(true, pId)}
          >
            Yes, delete
          </button>

          <button
            className="bg-sky-500 w-full text-white p-1 rounded mt-2 shadow-lg"
            onClick={() => handleChoice(false)}
          >
            Cancel
          </button>
        </div>
      </>
    );
  };

  const handleUpdateProductForm = (id) => {
    setShowUpdateForm(true)
    const product = products.filter((e, index) => index === id);
    product.forEach(e => {
      setProductId(e._id)
      setProductName(e.productName)
      setProductPrice(e.productPrice)
      setProductCat(e.productCat)
      setProductDesc(e.productDesc)
    })
  }

  const handleUpdateProduct = async (e) => {
    e.preventDefault()

    const data = {
      vendorId: currentVendor._id,
      productId,
      productName,
      productPrice,
      productCat,
      productImage,
      productDesc
    }

    const res = await updateProduct(data)
    if (res && res.status === 'success') {
      toast.success('Product updated')
      setShowUpdateForm(false)
    } else {
      toast.error('Update failed! Please try again')
    }
  }

  useEffect(() => {
    handleVendorProducts();
    setInterval(() => {
      handleVendorProducts();
    }, 5000)
    window.scrollTo(0, 0);
    getUser()

    return () => { };
  }, []);

  return (
    <>
      {currentVendor.active ? (
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
                <button
                  onClick={() => setIsShowForm(true)}
                  className="bg-orange-400 flex items-center gap-2 p-2 rounded md:rounded-full text-white hover:translate-y-1 duration-500 hover:shadow"
                >
                  <span className="hidden md:block">Add Product</span>
                  <FiPlusCircle size={20} />
                </button>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                {/* Traverse through product array in state */}

                {isProducts
                  ? products.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex bg-white rounded duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg"
                      >
                        {/* <div className={`w-32 h-auto bg-[url('${product.productImage}')] rounded-lg bg-cover bg-center`}></div> */}
                        <img
                          className="w-32 h-auto"
                          src={product.productImage}
                          alt=""
                        />


                        <div className="mt-3 flex flex-col items-start px-3">
                          <h1 className="font-bold text-xl">
                            {product.productName}
                          </h1>
                          <p className="text-sm text-gray-500 mt-1">
                            {product.productDesc.length <= 200
                              ? product.productDesc.substr(0, 200)
                              : `${product.productDesc.substr(0, 200)}.....`}
                          </p>
                          <p className="text-md text-orange-700 mt-3 font-bold">
                            ${Intl.NumberFormat().format(product.productPrice)}
                          </p>

                          <div className="w-full justify-end flex py-2 gap-4">
                            <FiTrash2
                              onClick={() => handleDeleteProduct(product.productName, product._id)}
                              size={20}
                              className="cursor-pointer duration-700 hover:text-red-400"
                            />
                            <FiEdit
                              size={20}
                              onClick={() => handleUpdateProductForm(index)}
                              className="cursor-pointer duration-700 hover:text-sky-400"
                            />
                            <FiUploadCloud
                              size={20}
                              onClick={() => toast.info('Publish feature coming soon')}
                              className="cursor-pointer duration-700 hover:text-green-400"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                  : null}

                {isProducts === false ? (
                  <h2 className="text-red-600 border-2 shadow bg-red-200 p-2 rounded-lg">
                    No product yet!
                  </h2>
                ) : null}
              </div>
            </div>
          </div>

          {/* Add product form */}
          {isShowForm ? (
            <div className="w-full flex justify-center duration-500">
              <div className="w-96 md:w-[50rem] flex flex-col absolute top-20 bg-orange-400 p-16 mx-96 rounded shadow-xl border-2">
                <div className="w-full flex justify-end">
                  <span
                    onClick={() => setIsShowForm(false)}
                    className="p-1 bg-red-400 text-white w-6 h-6 flex justify-center items-center rounded-full hover:bg-red-500 cursor-pointer duration-500"
                  >
                    &times;
                  </span>
                </div>
                <h1 className="font-bold text-xl text-white">Add Product</h1>
                <form className="mt-3" onSubmit={handleAddProduct}>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    required
                    onChange={(e) => handleProductNameAndSlug(e)}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />

                  <input
                    type="text"
                    required
                    readOnly
                    defaultValue={productSlug}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />

                  <input
                    type="text"
                    placeholder="Enter product price"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />

                  <select
                    required
                    onChange={(e) => setProductCat(e.target.value)}
                    defaultValue={'DEFAULT'}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  >
                    <option value="DEFAULT" disabled>
                      Select category
                    </option>
                    <option value="clothes">Clothes</option>
                    <option value="jewelries">Jewelries</option>
                    <option value="computing">Computing</option>
                    <option value="gaming">Gaming</option>
                  </select>

                  <input
                    type="file"
                    accept="image/"
                    placeholder="Enter product image"
                    required
                    onChange={handleProductImage}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />
                  {productImage ? <>
                    <img
                      className="w-32 h-auto border-2 rounded border-white"
                      src={productImage} alt=""
                    />
                  </> : <p>Image preview</p>}<br></br>


                  <textarea
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                    placeholder="Enter product description"
                    required
                    onChange={(e) => setProductDesc(e.target.value)}
                  ></textarea>

                  <button
                    ref={submitBtn}
                    type="submit"
                    className="p-2 bg-white rounded hover:bg-gray-100 hover:translate-y-1 duration-500"
                  >
                    Publish product
                  </button>
                </form>
              </div>
            </div>
          ) : null}

          {/* Update product form */}
          {showUpdateForm ? (
            <div className="w-full flex justify-center duration-500">
              <div className="w-96 md:w-[50rem] flex flex-col absolute top-20 bg-orange-400 p-16 mx-96 rounded shadow-xl border-2">
                <div className="w-full flex justify-end">
                  <span
                    onClick={() => setShowUpdateForm(false)}
                    className="p-1 bg-red-400 text-white w-6 h-6 flex justify-center items-center rounded-full hover:bg-red-500 cursor-pointer duration-500"
                  >
                    &times;
                  </span>
                </div>
                <h1 className="font-bold text-xl text-white">Update Product</h1>
                <form className="mt-3" onSubmit={handleUpdateProduct}>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />

                  <input
                    type="text"
                    placeholder="Enter product price"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />

                  <select
                    required
                    onChange={(e) => setProductCat(e.target.value)}
                    defaultValue={productCat}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  >
                    <option value="DEFAULT" disabled>
                      Select category
                    </option>
                    <option value="clothes">Clothes</option>
                    <option value="jewelries">Jewelries</option>
                    <option value="computing">Computing</option>
                    <option value="gaming">Gaming</option>
                  </select>

                  <input
                    type="file"
                    placeholder="Enter product price"
                    onChange={handleProductImage}
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  />
                  {productImage ? <>
                    <img
                      className="w-32 h-auto border-2 rounded border-white"
                      src={productImage} alt=""
                    />
                  </> : <p>Image preview</p>}<br></br>


                  <textarea
                    className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                    placeholder="Enter product description"
                    value={productDesc}
                    required
                    onChange={(e) => setProductDesc(e.target.value)}
                  ></textarea>

                  <button
                    ref={submitBtn}
                    type="submit"
                    className="p-2 bg-white rounded hover:bg-gray-100 hover:translate-y-1 duration-500"
                  >
                    Update product
                  </button>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className="w-full bg-[#edf4f6] min-h-screen"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="w-full flex">
            <VendorNav />

            <div className="main w-full py-7 px-5 md:px-6 lg:px-14 flex flex-col items-start md:ml-48 ml-10">
              <p className="text-2xl text-red-700">Your account is not activated!</p>
              <ActivateAccount />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
