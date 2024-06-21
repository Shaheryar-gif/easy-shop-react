import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './Checkout.css'; // Import a CSS file for styling (create this file)
import { DELETEFROMCART } from "../redux/actions/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [quantities, setQuantities] = useState(1);

  const IncreaseP = (id) => {
    setQuantities((preQuantities) => ({
      ...preQuantities,
      [id]: (preQuantities[id] || 1) + 1,
    }));
  };

  const DecreaseP = (id) => {
    if (quantities[id] > 1) {
      setQuantities((preQuantities) => ({
        ...preQuantities,
        [id]: preQuantities[id] - 1,
      }));
    }
  };

  const cartsData = useSelector((state) => state.CartReducer.carts);
  console.log("Carts Data:", cartsData);

  const calculateTotalPrice = (ele, Quantity) => {
    return Quantity * ele.price;
  };

  const subtotal = cartsData.reduce(
    (acc, ele) => acc + calculateTotalPrice(ele, quantities[ele.id] || 1),
    0
  );

  let navigate = useNavigate();

  if (cartsData.length === 0) {
    toast.success(" Cart is Empty.. First Add Some Products !", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-center fw-bolder",
    });
    navigate("/");
  }

  let dispatch = useDispatch();

  const DELETE = (id) => {
    // console.log("DELETE",delCart);
    dispatch(DELETEFROMCART(id));
    toast.error("Item Delete From Cart !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-danger text-center fw-bolder",
    });
  };

  const Checkout = () =>{
    navigate("/sign");
    window.location.reload(true);
  }

  return (
      // <div className="container w-75 mt-5 checkout-container mx-auto">
      //   <h2 className="mb-4 text-center">Checkout-List</h2>
      //   <table className="table table-bordered text-center">
      //     <thead>
      //       <tr>
      //         <th className="bg-dark text-white">Sr No #</th>
      //         <th className="bg-dark text-white">Name</th>
      //         <th className="bg-dark text-white ">Quantity</th>
      //         <th className="bg-dark text-white ">Price</th>
      //         <th className="bg-dark text-white">Total Price</th>
      //         <th className="bg-dark text-white">Action</th>
      //       </tr>
      //     </thead>
      //     <tbody className="fs-4 " >
      //       {cartsData.map((ele, index) => (
      //         <tr key={index + 1}>
      //           <td>{index + 1}</td>
      //           <td>{ele.title.slice(0, 30)}</td>
      //           <td>
      //             <button
      //               className="btn btn-sm fs-5"
      //               onClick={() => DecreaseP(ele.id)}
      //             >
      //               -
      //             </button>
      //             <h7 className="fs-5">{quantities[ele.id] || 1}</h7>
      //             <button
      //               className="btn btn-sm fs-5"
      //               onClick={() => IncreaseP(ele.id)}
      //             >
      //               +
      //             </button>
      //           </td>
      //           <td>$ {ele.price}</td>
      //           <td>$ {calculateTotalPrice(ele, quantities[ele.id] || 1)}</td>
      //           <button
      //             className="btn btn-danger"
      //             onClick={() => DELETE(ele.id)}
      //           >
      //             <i className="fa-sharp fa-solid fa-trash fs-3"></i>
      //           </button>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      //   <div className="text-center mt-5">
      //     <h3 className="fw-bold">Subtotal: ${subtotal}</h3>
      //     <a href="/home" className="btn btn-primary mt-3">
      //       Checkout
      //     </a>
      //     <h1 className="mt-3">THANKS FOR ORDERING</h1>
      //   </div>
      // </div>
      <div>
      <div>
        <h1 className="text-center">Easyshop Checkout-List</h1>
        <hr />
          <div className="container mx-auto">
          <div className="row1 row "> 
            <div className="col-xl-8 mt-5 mx-auto">
              {cartsData.map((ele) => (
                <div className="card shadow-lg mb-3 ">
                  <div className="card-body">
                    <div className="d-flex border-bottom pb-3 ">
                      <div className="me-4">
                        <img
                          src={ele.image}
                          height={180}
                          width={200}
                          className="avatar-lg rounded"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-20 text-center">
                            <a href="#" className="text-dark">
                              {ele.title}
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="flex-shrink-0 my-4">
                        <ul className="list-inline mb-0 font-size-16">
                          <button className="btn">
                            <i
                              className="fa-sharp fa-solid fa-trash fs-3 "
                              onClick={() => DELETE(ele.id)}
                            ></i>
                          </button>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2 ms-3">Price</p>
                            <h5 className="mb-0 mt-2">
                              <span className="text-muted me-2"></span>$ 
                              {ele.price}
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Quantity</p>
                            <button
                              className="btn fs-5"
                              onClick={() => DecreaseP(ele.id)}
                            >
                              -
                            </button>
                            {quantities[ele.id] || 1}
                            <button
                              className="btn fs-5"
                              onClick={() => IncreaseP(ele.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Total</p>
                            <h5>
                              ${calculateTotalPrice(ele,quantities[ele.id] || 1)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className=" d-flex justify-content-center">
                <div className="col-xl-4 mt-auto">
                  <div className="mt-5 mt-lg-0">
                    <div className="card border shadow-5">
                      <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0 text-center">
                          Order Summary
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td className="fw-bolder"> Total Amount :</td>
                                <td className="total-amount animate__animated animate__rubberBand fw-bolder"><h5 className="me-5">${subtotal}</h5></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4 ">
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <a onClick={Checkout} className="checkbtn  btn btn-success">
                      <i className="mdi mdi-cart-outline" /> Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default Checkout;
