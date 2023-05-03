import React from "react";

//Import Router-v6
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Layout
import Layout from "./layout/Layout";

//Import Pages
import WeaseMainPanel from "./pages/WeaseMainPanel";
import Login from "./pages/Login";

//Import ProtectedRoutes
import ProtectedRoutes from "./auth/ProtectedRoutes";

//Recoil State Management
import { RecoilRoot } from "recoil";
import HomePage from "./components/HomePage/HomePage";



import './library.js';

import './index.css'

function App() {
  return (
          <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weasepanel" element={<WeaseMainPanel  />}/> 
          {/* kontrol et  açamak için ekledim ebru  */}
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/weasepanel"
              element={<Layout content={<WeaseMainPanel />} />}
            />
          </Route> 
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
