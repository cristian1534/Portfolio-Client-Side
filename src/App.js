import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./middleware/PrivateRoute";

// components
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path='/admin' element={<PrivateRoute/>}>
            <Route exact path='/admin' element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
