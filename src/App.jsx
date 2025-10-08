import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer.jsx";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/icofont.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.min.css";

import { Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import SingleBlog from "./blog/SingleBlog.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Login from "./components/Login.jsx";
import CartPage from "./home/CartPage.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Signup from "./components/Signup.jsx";
import Empty from "./home/Empty.jsx";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route
            path="/cart-page"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/empty" element={<Empty/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
