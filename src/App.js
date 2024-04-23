import { Homepage } from "./pages/homepage";
import "./App.css";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Header } from "./pages/header";
import { GoogleSign } from "./pages/google-sign";
// import { Dealers } from "./pages/dealers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Categories} from "./pages/categories";
import { FAQ } from "./components/FAQs/FAQs";
import  {Dealerdetail}  from "./pages/dealer-detail";
import { Dashboard } from "./pages/dashboard";
import { Navbar1 } from "./components/navbar1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dealers" element={<Dealers />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/dealer-detail" element={<Dealerdetail/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/navbar1" element={<Navbar1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
