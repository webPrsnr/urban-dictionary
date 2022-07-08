import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Words from "../pages/Words/Words";
import { Alphabet } from "../pages/Alphabet/Alphabet";
import WordPage from "../pages/WordPage/WordPage";
import { Provider } from "react-redux";
import store from "../store/index";
import "./App.module.scss";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="words" element={<Words />} />
              <Route path="words/:id" element={<WordPage />} />
              <Route path="browse/:alphabet" element={<Alphabet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
