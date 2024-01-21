import React, { useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'; // for animation
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import delivery from "../Images/delivery.png"
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ handleLogin }) => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
      // storing data to local storage in below line at useradmin16 key
        const getuserArr = localStorage.getItem("useradmin16");
        console.log(getuserArr);
   // performing validation
        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    handleLogin(userlogin);
                    history("/MenuPage")
                }
            }
        }

    }
    // using useEffect for animation in below with wow.js library
    useEffect(() => {
        new WOW({
          live: false,
        }).init();
      }, []);

    return (
        <>
            <div class="container col-xxl-8 px-4 py-5 wow bounceInUp "  data-wow-duration="2s">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6 ">
                  <img src={delivery}class="d-block mx-lg-auto img-fluid"alt="logo"width="700"height="500"loading="lazy"/>
                </div>
                <div class="col-lg-6">
                  <h3 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Login</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-8' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">
              New User?{" "}
              <span>
                <NavLink to="/SignUp">Sign Up</NavLink>
              </span>{" "}
            </p>
                  </div>
              </div>
               <ToastContainer />
            </div>
        </>
    )
}

export default Login