import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

import SignUp from "./components/SignUp";
import Portfolio from "./components/Portfolio";
import WalletConnect from "./components/WalletConnect";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./Dashboard";

import Search from "./components/Search";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route element={<Dashboard />}>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Search" element={<Search />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/wallet-connect" element={<WalletConnect />} />
              <Route
                exact
                path="/forget-password"
                element={<ForgetPassword />}
              />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
