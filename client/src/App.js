import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import CropDetails from "./components/CropDetails";
import { useEffect, useState } from "react";
import { CropsContext, cropContext, useCrops } from "./context/CropsContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cropDetails/:name" element={<CropDetails />} />
      </Route>
    </Route>
  )
);
function App() {
  const [crops, setCrops] = useState(null);
  return (
    <CropsContext.Provider value={{ crops, setCrops }}>
      <RouterProvider router={router} />
    </CropsContext.Provider>
  );
}

export default App;
