import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const SUBMIT = async (e) => {
    try {
      e.preventDefault();
      let result = await fetch("http://localhost:2000/LogIn", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      result = await result.json();

      if (!result.success) {
        alert("INVALID PERSON");
      }
      if (result.success) {
        navigate("/main");
        toast.success(' WELCOME TO EASY-SHOP ', {
          position: "top-center",
          autoClose: 2000, // Auto-close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className:"text-center"
      });
      }
      
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
        height: "80vh",
      }}
    >
      <div>
        <center>
          <h1 className=" fw-bold text-white">LOG-IN</h1>
          <form className="Container w-75 mt-5">
            <div className="container text-center  w-50 my-1">
              <div className="row">
                <div className="card-body">
                  <form className="needs-validation ">
                    <div>
                      <label
                        htmlFor="username"
                        className=" fw-bold text-white mt-1"
                      >
                        Email :
                      </label>
                      <input
                        className="form-control  mt-3"
                        type="text"
                        placeholder="type email"
                        autoCorrect="off"
                        id="useremail"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <br />
                    <div>
                      <label
                        htmlFor="username"
                        className=" fw-bold mt-1 text-white"
                      >
                        Password :
                      </label>
                      <input
                        className="form-control  mt-3"
                        type="password"
                        placeholder="type password"
                        autoCorrect="off"
                        id="username"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </form>
                  <center>
                    <br />
                    <br />
                    <button
                      className="btn btn-success text-center ms-5"
                      onClick={SUBMIT}
                    >
                      SUBMIT
                    </button>
                    <a href="/"  className="btn btn-danger text-center ms-5">
                        i'm new user
                    
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Login;
