import "./Styles/Commonstyles.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Browse from "./Components/Browse";
import Ourproduct from "./Components/Ourproduct";
import Exploremore from "./Components/Exploremore";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Singleproduct from "./Components/Singleproduct";
import Productcomparison from "./Components/Productcomparison";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Browse />
                <Ourproduct />
                <Exploremore />
                <Gallery />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Singleproduct />} />
          <Route path="/comparison" element={<Productcomparison />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
