import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/body" element={<Body/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
