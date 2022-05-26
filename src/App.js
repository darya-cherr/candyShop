
import Header from "./client/Components/Header";
import Footer from "./client/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import SignInOutContainer from "./client/containers/container";
import Home from "./client/pages/Home"
import About from "./client/pages/About"
import ProductsPage from "./client/pages/product/ProductsPage"
import Contacts from "./client/pages/contacts/Contacts"
import Game from "./client/pages/game/index"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ProductList from "./client/pages/product/ProductList";
import ProductInfo from "./client/pages/product/ProductInfo";
import Cart from "./client/pages/Cart";
import Success from "./client/pages/Success";
import Orders from "./client/pages/Orders";


function App(){
  return (
    <>
        <Router>
            <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/productList/:category" element={<ProductList/>}/>
            <Route path="/authorization" element={<SignInOutContainer/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/success" element={<Success/>}/>

            <Route path="/game" element={<Game/>}/>
        </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
