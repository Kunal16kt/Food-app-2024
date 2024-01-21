import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../Images/logo.png";
import insta2 from "../Images/instagram2.svg";
import face2 from "../Images/facebook2.svg";
import twitter from "../Images/twitter2.svg";


const Footer = () => {
  return (
    <footer id="footer" className="footer-1 bg-dark text-light py-5">
      <div className="main-footer widgets-dark typo-light">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <div className="widget subscribe no-box">
                <img
                  src={logo}
                  className="img-responsive center-block"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links</h5>
                <div className="thumb-content">
                  <a
                    href="#."
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className="thumb-content">
                  <a
                    href="#."
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Delivery
                  </a>
                </div>
                <div className="thumb-content">
                  <a
                    href="#."
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    FAQs
                  </a>
                </div>
                <div className="thumb-content">
                  <a
                    href="#."
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="widget no-box">
                <h3 className="footer-heading">Social Media</h3>
                <ul className="ft-social-list list-inline d-flex flex-row">
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={insta2}
                        alt="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={face2}
                        alt="facebook"
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={twitter}
                        alt="twitter"
                        style={{ width: "35px", height: "35px" }}
                      />
                    </a>
                  </li>
                </ul>
                <br></br>
                <h3 className="footer-heading">Secure Payments By</h3>
              <img src="https://webthemez.com/wp-content/uploads/2019/07/payment-paypal-icons.png" alt="instagram" />
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us</h5>
                <p>Subscribe to our newsletter for latest's offers. </p>
                <Form>
                  <div className="emailfield">
                    <Form.Group
                      className="mb-3 col-lg-8"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright">
          <Container>
            <Row>
              <Col md={12} className="text-center py-3">
                <p>Worldly Whisk© 2023. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
