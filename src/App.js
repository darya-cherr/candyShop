import './App.css';
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import SignInOutContainer from "./containers/index";

import Contain from "./containers/container";
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contacts from "./pages/Contacts"
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
            <Route path="/authorization" element={<Contain/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
