import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Agents from "./components/Agents";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentDetails from "./components/AgentDetails";


const App = () => {
  
  return (
    <>
      {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path="/agents" exact element={<Agents />} />
          <Route path="/agents/:mil" element={<AgentDetails/>} />
        </Routes>
    </>
  );
};

export default App;
