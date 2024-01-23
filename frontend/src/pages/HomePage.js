import React , { useEffect }from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';  // for animation 
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';
import logo from '../Images/logo.png';
import delivery from "../Images/delivery.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Slides from "../components/Carousel";

const Hero = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);
   const user = localStorage.getItem("user");
  // const logoutUser = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };
  // const customStyles = {
  //   backgroundColor: '#E6AB6C', // Use the given color code
  // };

  return (
    <div>
     {/* using hero section from bootstrap */}
    <div class="container col-xxl-8 px-4 py-5" >
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            {/* using wow.js animation in below line for logo animation */}
          <div class="col-10 col-sm-8 col-lg-6 wow pulse animated" data-wow-delay="300ms" data-wow-iteration="infinite" data-wow-duration="2s"> 
            <img src={logo} class="d-block mx-lg-auto img-fluid" alt="logo" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6 wow slideInLeft" data-wow-delay="0.1s">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Worldly Whisk: </h1><h2> Unleashing Global Flavors, One Bite at a Time!</h2>
            <p class="lead">Experience the world's authentic flavors, all delivered to your doorstep. Elevate your dining with convenience and savor a journey of culinary delights. Welcome to Worldly Whisk—where every bite is a global adventure!</p>
            {/* dynamic button functionality if logged in go to menupage if not logged in go to signup page */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">{isLoggedIn ? (
            <button  onClick={() => navigate("/MenuPage")} type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{ background: "rgb(67, 185, 127)" }}>Order Now!</button>) : (
              <NavLink to="/SignUp">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 "style={{ background: "rgb(67, 185, 127)" }}>Explore Menu</button>
              </NavLink>
               )}
            </div>
          </div>
        </div>
    </div>
    <Slides />
    {/* using hero section from bootstrap */}
    <div class="container col-xxl-8 px-4 py-5" >
        <div class="row flex-lg-row align-items-center g-5 py-5">
             {/* using wow.js animation in below line for logo animation */}
          <div class="col-10 col-sm-8 col-lg-6 wow slideInLeft" data-wow-delay="0.3s">
            <img src={delivery} class="d-block mx-lg-auto img-fluid" alt="logo" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6 wow slideInRight" data-wow-delay="0.3s">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> <h2> Experience the world's authentic flavors delivered to your doorstep with Worldly Whisk</h2></h1>
            <p class="lead">Experience culinary excellence with Worldly Whisk! We bring authentic global flavors to your doorstep, ensuring timely delivery across a wide area range. Elevate your dining effortlessly—click, savor, and embark on a taste adventure with every meal.</p>
            {/* dynamic button functionality if logged in go to menupage if not logged in go to signup page */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">{isLoggedIn ? (
            <button onClick={() => navigate("/MenuPage")} className="btn btn-primary btn-lg px-4 me-md-2" style={{ background: "rgb(67, 185, 127)" }}>Order Now!</button>) : (
              <NavLink to="/SignUp">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 "style={{ background: "rgb(67, 185, 127)" }}>Order Now!</button>
              </NavLink>
               )}
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Hero;