import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';
import Hero from "./pages/HomePage";
 import SignUp from './pages/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/LoginPage";
// import ProductsDetails from "./components/ProductsDetails";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";



function App() {
  const storedUser = JSON.parse(sessionStorage.getItem("user_login"));
  const [isLoggedIn, setLoggedIn] = useState(!!storedUser);
  const [tabs, setTabs] = useState(isLoggedIn ? ['Home', 'About', 'Contact', 'Menu', 'Cart'] : ['Home', 'About', 'Contact']);

  const handleLogin = (user) => {
    sessionStorage.setItem("user_login", JSON.stringify(user));
    setLoggedIn(true);
    setTabs([...tabs, 'Menu' , 'Cart']);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user_login");
    setLoggedIn(false);
    setTabs(['Home', 'About', 'Contact']);
    return <Navigate to="/" />;
  };
  return (
    <Router>
    <CustomNavbar tabs={tabs} isLoggedIn={isLoggedIn}  handleLogout={handleLogout} />
   
    <Routes>
      <Route path= '/' element={<Hero isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
      <Route path= '/home' element={<Hero isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/signUp" element={<SignUp />} /> 
      <Route path="/Login" element={<Login handleLogin={handleLogin}  />} />
      <Route path="/MenuPage" element={<MenuPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    
    <Footer />
  </Router>
  );
}

export default App;



