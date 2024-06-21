import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {



  let cartsData = useSelector((state) => state.CartReducer.carts);
  console.log("DATA IN HEADER", cartsData);

  let navigate = useNavigate()
  const isCartAdded = useSelector((state)=>state.CartReducer.carts)

 const ZeroProducts = () =>{
  if(cartsData.length === 0){
    toast('Cart is Empty...First Add Some Products !', {
      position: "top-center",
      autoClose: 4000, // Auto-close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className:'text-center'
  });
  navigate('/')
  }
 }




  return (
    <div>
      <h6>
        <marquee className="bg-warning fs-5"  scrollamount="8">
          FREE Delivery Available over Rs. 1500 order
        </marquee>
      </h6>
      <nav
        className="navbar  navbar-expand-lg bg-light text-white"
        // style={{ position:'fixed' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mt-2" to="/">
            
            <img
              className="npic  mt-2"
              src="/Assets/log55.jpg"
              height={102}
              width={250}
            />
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-5 mb-2 mb-lg-0 mt-3 ms-5">
                <li className="nav-item text-center">
                  <Link
                    className="nav-link active text-dark  fw-bold"
                    aria-current="page"
                    to="/"
                  >
                    <i>HOME</i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-dark  fw-bold" to="/mens">
                    <i>MENS</i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-dark   fw-bold"
                    to="/tech"
                  >
                    <i>TECH ACCESSORIES</i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-dark  fw-bold"
                    to="/electronics"
                  >
                    <i>ELECTRONICS</i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-dark fw-bold" to="/womens">
                    <i>WOMENS</i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-dark fw-bold" to="/shoes">
                    <i>SHOES</i>
                  </Link>
                </li>
              </ul>
              <Link to={cartsData.length > 0 ? "/checkout" : "/"} onClick={()=>ZeroProducts()} className="nav-link text-dark fw-bold mt-3 me-2 ms-auto">
            <Badge  badgeContent={cartsData.length} color="primary">
              <i className="fa-solid fa-cart-shopping fs-2"></i>
            </Badge>
          </Link>
            </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

