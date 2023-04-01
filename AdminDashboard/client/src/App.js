import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import "./App.css";
import Ecomm3 from "./components/Ecomm3/Ecomm3";
import Ecomm2 from "./components/Ecomm2/Ecomm2";
import Ecomm1 from "./components/Ecomm1/Ecomm1";

const Login = () => <LoginPage />;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/ecomm2" element={<Ecomm2 />} />
            <Route path="/ecomm3" element={<Ecomm3 />} />
            <Route path="/ecomm1" element={<Ecomm1 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
