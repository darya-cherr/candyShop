import './App.css';
import Header from "./client/Components/Header";
import Footer from "./client/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import SignInOutContainer from "./client/containers";
import Home from "./client/pages/Home"
import About from "./client/pages/About"
import Products from "./client/pages/Products"
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
            <Route path="/products" element={<Products/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/authorization" element={<SignInOutContainer/>}/>
        </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;
