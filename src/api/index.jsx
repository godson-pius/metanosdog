import Axios from "axios";
import { customAlphabet } from 'nanoid'

const API = "http://localhost:4000/api";

const handleUserReg = async (formdata) => {
  try {
    const response = await Axios.post(`${API}/user/register`, formdata);
    return response.data;
  } catch (err) {
    return err.response.data.error.code;
  }
};

const handleUserLogin = async (formdata) => {
  try {
    const response = await Axios.post(`${API}/user/login`, formdata);
    return response.data;
  } catch (err) {
    return err;
  }
};


const getVendorProducts = async (vendorId) => {
  try {
    const response = await Axios.get(
      `${API}/product/vendorproducts/${vendorId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const handleVendorReg = async (formdata) => {
  try {
    const response = await Axios.post(`${API}/vendor/register`, formdata);
    return response.data;
  } catch (err) {
    return err.response.data.error.code;
  }
};

const handleVendorLogin = async (formdata) => {
  try {
    const response = await Axios.post(`${API}/vendor/login`, formdata);
    return response.data;
  } catch (err) {
    return err;
  }
};

const handleVendorUpdate = async (id,formdata) => {
  try {
    const response = await Axios.patch(`${API}/vendor/update/${id}`, formdata);
    return response.data;
  } catch (error) {
    return error;
  }
}

const addProduct = async (formdata) => {
  try {
    const response = await Axios.post(`${API}/product/addproduct`, formdata);
    return response.data;
  } catch (err) {
    return err;
  }
};

const getProducts = async () => {
  try {
    const response = await Axios.get(`${API}/product/products`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (formdata) => {
  try {
    const response = await Axios.patch(`${API}/product/update`, formdata);
    return response.data;
  } catch (error) {
    return error;
  }
}

const deleteProduct = async(id) => {
  try {
    const response = await Axios.delete(`${API}/product/delete/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

const handleCreateTicket = async(formdata) => {
  try {
    const response = await Axios.post(`${API}/ticket/create`, formdata);
    return response.data;
  } catch (error) {
    return error;
  }
}

const handleCreateCart = async(formdata) => {
  try {
    const response = await Axios.post(`${API}/cart/create`, formdata);
    return response.data;
  } catch (error) {
    return error;
  }
}
const getCart = async() => {
  try {
    const response = await Axios.get(`${API}/cart`);
    return response.data;
  } catch (error) {
    return error;
  }
}

const getUserCart = async(id) => {
  try {
    const response = await Axios.get(`${API}/cart/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

const removeItemFromCart = async(id) => {
  try {
    const response = await Axios.delete(`${API}/cart/remove/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
 }

 const handleGetSingleProduct = async(id) => {
  try {
    const response = await Axios.get(`${API}/product/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
 }

 export const addReview = async(data) => {
   try {
     const response = await Axios.post(`${API}/review/create`, data);
     return response.data;
   } catch (error) {
     return error;
   }
 }

 export const getProductReviews = async(_id) => {
    try {
      const response = await Axios.get(`${API}/review/${_id}`);
      return response.data;
    } catch (error) {
      return error
    }
 }

 export const handleVendorSignInPayment = async() => {
  try {
     const response = await Axios.post(`${API}/vendor-payment/makepayment`)
    return response.data
  }catch (e) {
    return e
  }
}

export const handleGenerateRefId = () => {
  const refId = customAlphabet('1234567890metanosdog', 7);
  return refId()
}

export {
  handleUserReg,
  handleUserLogin,
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  handleVendorReg,
  handleVendorLogin,
  handleVendorUpdate,
  getVendorProducts,
  handleCreateTicket,
  handleCreateCart,
  getCart,
  getUserCart,
  removeItemFromCart,
  handleGetSingleProduct
};
