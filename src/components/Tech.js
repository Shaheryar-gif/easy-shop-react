import React from "react";
import mobileLists from "../datas/MobileList";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";


const Tech = () => {
  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
  }, []);


  let dispatch = useDispatch();

  const addedItem = useSelector((state)=> state.CartReducer.carts)

  const sendItem = (e) => {
    // console.log(e);
    const cartAlready = addedItem.some((item)=> item.id === e.id)
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
      <div>
        <Navbar />
        <>
          <div className="Container" style={{ backgroundColor: "" }}>
            <div className="row">
              <h1 className="fw-bold fs-1">Tech Accessories</h1>
              {mobileLists.map((ele) => {
                return (
                  <div className="container col-lg-4 col-md-6 col-sm-12 ">
                    <div className="mt-5 mx-auto" style={{ width: "21rem" }}>
                      <img
                        src={ele.image}
                        className="card-img-top"
                        style={{ height: "23rem" }}
                      />
                      <div className="card-body ">
                        <h5 className="fw-bold ">{ele.title.slice(0, 25)}</h5>
                        <p className="fw-bold fs-3">${ele.price}</p>
                        <br />
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
                );
              })}
            </div>
          </div>
        </>
      </div>
      <Footer/>
    </div>
  );
};

export default Tech;
