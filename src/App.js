import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/form/SignIn';
import SignUp from './components/form/SignUp';
import SplashScreen from './components/splashScreen/SplashScreen';
// import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import OrderHist from './components/order/orderHist';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orderhist" element={<OrderHist />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
