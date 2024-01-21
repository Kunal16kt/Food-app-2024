import React , { useEffect }from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'; // for animation
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import phone from "../Images/phone.svg";
import mail from "../Images/mail.svg";
import facebook from "../Images/facebook.svg";
import insta from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";
import contact from "../Images/contactus.jpg";
const Contact = () => {
    // using useeffect for animation in below with wow.js library
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div class="container col-xxl-8 px-4 py-5">
       {/* using animation in below */}
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={contact}
            class="d-block mx-lg-auto img-fluid"
            alt="logo"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Contact Us{" "}
          </h1>
          <h4 className="mt-3 py-3">Any Queries??</h4>
          <Form>
            <textarea
              type="text"
              placeholder="Write your Query"
              style={{ width: "80%" }}
            ></textarea>
            <br />
            <Button
              variant="primary"
              className="col-lg-6"
              style={{ background: "rgb(67, 185, 127)" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <br />
          <div className="col-md-8" id="left">
            <p>
              <img src={phone} alt="telephone" className="px-2" />
              800-223-2500
            </p>
            <p>
            <img src={mail} alt="mail" className="px-2" />WorldlyWhisk@org.in
            </p>
            <p>
            <img src={facebook} alt="facebook" className="px-2" />Worldly Whisk
            </p>
            <p>
            <img src={insta} alt="instagram" className="px-2" />WorldlyWhisk_official
            </p>

            <p>
            <img src={twitter} alt="twitter" className="px-2" />@WorldlyWhisk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
