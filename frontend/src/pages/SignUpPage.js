import React, { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'; // for animation
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import delivery from "../Images/delivery.png";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const history = useNavigate();
  //   inpval is input value
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    //get data is getting all data from the input fields
    // console.log(e.target.value);

    const { value, name } = e.target;
    // name and input value names are same so we can simply write
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval, // spread operator is used so that is shows initial values i.e empty inpval
        [name]: value,
      };
    });
    // we are returning the new object
  };

  const addData = (e) => {
    // below line prevents page reload
    e.preventDefault();
    // below is validation
    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");

      localStorage.setItem("useradmin16", JSON.stringify([...data, inpval]));
      // we are storing the data to local storage and converting it to string
      // useradmin16 is the key and data is the value
      // to check local storage go to application in inspect and check local storage at useradmin16
    }
  };
  // using useEffect hook for animation with wow js
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div class="container col-xxl-8 px-4 py-5 wow bounceInUp "  data-wow-duration="2s">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={delivery}
              class="d-block mx-lg-auto img-fluid"
              alt="logo"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

          <div class="col-lg-6">
            <h3 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Sign Up
            </h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-8"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Login</NavLink>
              </span>{" "}
            </p>
          </div>
          {/* <SIgn_img /> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
