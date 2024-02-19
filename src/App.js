import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from './components/navbar';
import Footer from './components/footer';
import CartClient from "./pages/CartClient";
import Login from './login/Login';
import DeliveryPolicy from "./pages/DeliveryPolicy";
import AboutUs from "./pages/AboutUs";
import Register from "./register/Register";
import ProductsExchanges from "./pages/ProductsExchanges";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<CartClient/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/deliverypolicy" element={<DeliveryPolicy/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/exchanges" element={<ProductsExchanges/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
