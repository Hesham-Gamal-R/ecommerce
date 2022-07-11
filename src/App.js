import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ecommerce" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
