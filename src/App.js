
import Header from "./client/Components/Header";
import Footer from "./client/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import SignInOutContainer from "./client/containers/container";
import Home from "./client/pages/Home"
import About from "./client/pages/About"
import ProductsPage from "./client/pages/ProductsPage"
import Contacts from "./client/pages/Contacts"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function App(){
  return (
    <>
        <Router>
            <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/authorization" element={<SignInOutContainer/>}/>
        </Routes>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
