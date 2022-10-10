import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import Register from './pages/Login/Register';
import Product from './pages/Product/Product';
import ProductList from './pages/Product/ProductList';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = true;
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="*" />
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route path="/products/:category" element={<ProductList/>}>
      </Route>
      <Route path="/product/:id" element={<Product/>}>
      </Route>
      <Route path="/cart" element={<Cart/>}> 
      </Route>
      {/* {user ? <Navigate to="/" /> : <Login />} user ? <Navigate to="/" /> : <Register /> */}
      <Route path="/login" 
      element= {<Login></Login>}></Route>
      <Route path="/register" 
      element={<Register></Register>} >
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
