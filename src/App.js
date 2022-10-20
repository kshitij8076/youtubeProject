import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Menu, Video,Feed , VideoDetails} from "./components/export";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <div style={{ display: "flex" , backGroundColor:"black"}}>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/video/:id" element={ <VideoDetails />} />
          <Route exact path="/:link" element={ <Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
