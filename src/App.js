import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Routes>
         <Route path="checkout" element= { <Cart />}   ></Route>
         <Route path="login" element= { <Login />}   ></Route>
         <Route path="/" element={  <Index /> }  />
         

        </Routes>

      </Router>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  );
}
function Index() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
