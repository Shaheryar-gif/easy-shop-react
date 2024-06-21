// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Electronics from "./components/Electronics";
import Tech from "./components/Tech";
import Error from "./components/Error";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import MainHome from "./components/MainHome"; 
import Shoes from "./components/Shoes";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

