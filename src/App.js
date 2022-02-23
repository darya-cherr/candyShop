import './App.css';
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import SignInOutContainer from "./containers";



const App = () => {
  return (
    <div>
        <Header />
        <div className="App">
            <SignInOutContainer/>
        </div>
    </div>
  );
}

export default App;
