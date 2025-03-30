import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import NavbarC from "./components/navbar/NavbarC";
import FooterC from "./components/footer/FooterC";
import LoginPage from "./LoginPage";
import ProductDetail from "./pages/ProductDetail";
import RegisterPage from "./pages/RegisterPage";
import Contact from "./pages/Contact"
function App() {
    return (
        <Router>
            <NavbarC/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/loginPage" element={<LoginPage/>} />
                <Route path="/registerPage" element={<RegisterPage/>} />
                <Route path="/ProductDetail" element={<ProductDetail/>} />
            </Routes>

            <FooterC/>
        </Router>
    );
}

export default App;


  
