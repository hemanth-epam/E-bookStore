import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Myorders from './components/Myorders';
import Cart from './components/Cart';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Bookdetails from './components/Bookdetails';
import Checkout from './components/Checkout'

function App() {

  //As mentioned in task we are using routing to route/navigate to different components/pages
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Myorders" element={<Myorders />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Bookdetails" element={<Bookdetails />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
