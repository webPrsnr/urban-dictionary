import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import Loader from "../components/Loader/Loader";
import "./App.module.scss";

const Home = lazy(() => import("../pages/Home/Home"));
const Words = lazy(() => import("../pages/Words/Words"));
const Alphabet = lazy(() => import("../pages/Alphabet/Alphabet"));
const WordPage = lazy(() => import("../pages/WordPage/WordPage"));
const Layout = lazy(() => import("../components/Layout/Layout"));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="words" element={<Words />} />
                <Route path="words/:id" element={<WordPage />} />
                <Route path="browse/:alphabet" element={<Alphabet />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
