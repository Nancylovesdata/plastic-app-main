import { Homepage } from "./pages/homepage";
import "./App.css";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Header } from "./pages/header";
import { GoogleSign } from "./pages/google-sign";
// import { Dealers } from "./pages/dealers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categories } from "./pages/categories";
import { FAQ } from "./components/FAQs/FAQs";
import { ContactUs } from "./pages/contactUs";

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
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
