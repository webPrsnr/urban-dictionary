import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Words from "../../pages/Words/Words";
import BrowseWords from "../../pages/BrowseWords/BrowseWords";
import { Alphabet } from "../../pages/Alphabet/Alphabet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="words" element={<Words />} />
          <Route path="browse" element={<BrowseWords />}></Route>
          <Route path="browse/:alphabet" element={<Alphabet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
