import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Words from "../../pages/Words/Words";
import BrowseWords from "../../pages/BrowseWords/BrowseWords";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="words" element={<Words />} />
          <Route path="browse" element={<BrowseWords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
