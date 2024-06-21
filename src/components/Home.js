import React, { useEffect } from "react";
import Slider from "./Slider";
import ProductsList from "../datas/ProductsLists";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
  }, []);

  let dispatch = useDispatch();

  const isCartAdded = useSelector((state)=>state.CartReducer.carts)

const sendItem = (e) => {
  const cartAlready = isCartAdded.some((item)=> item.id === e.id)
  // dispatch(updateQuantity(e.id, 1));
  if (cartAlready) {
    toast.warning('Item Already Added !',{
      position: "top-center",
      autoClose: 2000, // Auto-close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className:"text-center fw-bolder"
  });
    
  } else{
    dispatch(addToCart(e));
    toast.success('Item Added To Cart !',{
      position: "top-center",
      autoClose: 2000, // Auto-close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className:"text-center fw-bolder"
  });
  }  
};

  if (loaders) {
    return (
      <ClipLoader
      className="text-center fw-bolder"
        color={"#ef0e0e"}
        loading={loaders}     
        cssOverride={300}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <Navbar />
      <Slider />
      <div className="Home">
        <div className="Container mt-5" style={{ backgroundColor: "" }}>
          <div className="row ms-1">
            <h1 className="fw-bold fs-1">PRODUCTS OVERVIEW</h1>
            {ProductsList.map((ele) => (
              <div className="container  col-lg-4 col-md-6 col-sm-12 ">
                <div className="mx-auto mt-5 " style={{ width: "18rem" }}>
                  <img
                    src={ele.image}
                    className="card-img"
                    style={{ height: "22rem"}}
                    alt={ele.title}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold mt-5 ">{ele.title.slice(0, 25)}</h5>
                    <p className="fw-bold fs-3">${ele.price}</p>
                    <br/>
                    <Link
            onClick={() => sendItem(ele)}
            className="btn btn-primary btn-lg"  
            style={{ borderRadius: '20px' }}  
          >
            Add to Cart
          </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
