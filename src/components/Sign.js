import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const [loaders, setLoaders] = useState(false);

  useEffect(() => {
    setLoaders(true);
    setTimeout(() => {
      setLoaders(false);
    }, 1000);
  }, []);

  if (loaders) {
    return (
      <ClipLoader
        color={"#ef0e0e"}
        loading={loaders}
        cssOverride={300}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-5"
      />
    );
  }

  const SUBMIT = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !city ||
      !location ||
      !address
    ) {
      alert("ALL INFORMATION ARE REQUIRED");
      return;
    }

    try {
      let result = await fetch("http://localhost:2000/signIn", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          city,
          location,
          address,
        }),
      });

      if (result.ok) {
        toast.success("Thanks For Ordering", {
          position: "top-center",
          autoClose: 2000, // Auto-close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "text-center",
        });
      }
      result = await result.json();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/Assets/bg3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "120vh",
      }}
    >
      <form className="text-white">
        <center>
          <h1 className="text-center fw-bold">
            <i>Easyshop order form</i>
          </h1>
          <br />
          <div className="container2">
            <div className="header"> </div>
            {/* INPUTS */}

            <div className="inputs">
              <div className="input">
                <i class=" "></i>
                <input
                  type="text"
                  className="ms-1"
                  placeholder="Name"
                  id="username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <br />

              <div className="input">
                <i class=""></i>
                <input
                  type="email"
                  className="ms-1"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <br />

              <div className="input">
                <i class=""></i>
                <input
                  className="ms-1"
                  type="password"
                  placeholder="Passwords"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />{" "}
              </div>
              <br />

              <div className="input">
                <i className=""></i>

                <input
                  type="text"
                  className="ms-1"
                  placeholder="Contact Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <br/>

              <div className="input">
                <i className=""></i>

                <input
                  type="text"
                  className="ms-1"
                  placeholder="City"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                />
              </div>
              <br/>
              <div className="input">
                <i className=""></i>

                <input
                  type="text"
                  className="ms-1"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input">
                <i className=""></i>
                <br/>
                <input
                  type="text"
                  className="ms-1"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                />
              </div>



            </div>
          </div>
        </center>

        <br />
        <button className="btn btn-success text-center " onClick={SUBMIT}>
          SUBMIT
        </button>
      </form>
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default Sign;
// {/* <form className="text-white">
// <center>
// <h1 className="text-center fw-bold"><i>Easyshop order form</i></h1>
// <br/>
// <div className="container2" >
// <div className="header">

// </div>
// {/* INPUTS */}
// <div className="inputs">
// <div className="input">
//   <i class="fa-solid fa-person fs-5 "></i>
//   <input type="text" className="ms-5" placeholder="Name" />
// </div>
// <br/>
// <br/>
// <br/>

// <div className="input">
//   <i class="fa-solid fa-envelope"></i>
//   <input type="email" className="ms-5" placeholder="Email" />
// </div>

// <br/>
// <br/>
// <br/>

// <div className="input">
//   <i class="fa-solid fa-lock "></i>
//   <input className="ms-5" type="password" placeholder="Passwords" />
// </div>

// <br/>
// <br/>
// <br/>

// <div className="input">
// <i className="fa fa-phone"></i>
//   <input type="text" className="ms-5" placeholder="Contact Number" />
// </div>

// </div>

// </div>
// </center>

//   <br />
//   <button
//     className="btn btn-success text-center "
//     onClick={SUBMIT}
//   >
//     SUBMIT
//   </button>
//   {/* <a href="/login" className="btn btn-danger text-center ms-5">
//     ALREADY HAVE ACCOUNT
//   </a> */}

// </form> */}
