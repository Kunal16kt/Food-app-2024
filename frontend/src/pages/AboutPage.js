import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';  // for animation
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // for social media icons
import about1 from '../Images/about-1.jpg';
import about2 from '../Images/about-2.jpg';
import about3 from '../Images/about-3.jpg';
import about4 from '../Images/about-4.jpg';
import team1 from '../Images/team-1.jpg';
import team2 from '../Images/team-2.jpg';
import team3 from '../Images/team-3.jpg';
import team4 from '../Images/team-4.jpg';
import { WOW } from 'wowjs';



const About = () => {
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
            {/* using animation in below */}
          <div className="row g-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">  
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                     {/* using animation in below */}
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={about1}
                    alt=""
                    style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn' }}
                  />
                </div>
                <div className="col-6 text-start">
                     {/* using animation in below */}
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={about2}
                    alt=""
                    style={{ marginTop: '25%', visibility: 'visible', animationDelay: '0.3s', animationName: 'zoomIn' }}
                  />
                </div>
                <div className="col-6 text-end">
                     {/* using animation in below */}
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={about3}
                    alt=""
                    style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'zoomIn' }}
                  />
                </div>
                <div className="col-6 text-end">
                     {/* using animation in below */}
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={about4}
                    alt=""
                    style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'zoomIn' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start  fw-normal">
                About Us
              </h5>
              <h1 class="mb-4">Welcome to <i class="fa fa-utensils text-primary me-2"></i>Worldly Whisk</h1>
                  <p class="mb-4">
Whisk World Cuisine is a culinary voyage that transcends borders, weaving together the vibrant tapestry of global flavors into a single, eclectic menu. Established in 1995, our restaurant is a celebration of diverse culinary traditions, where each dish tells a story from a different corner of the world.</p>
                  <p class="mb-4">From the fiery spices of Indian curry to the delicate artistry of Japanese sushi, Whisk invites diners to embark on a journey that explores the rich tapestry of global cuisine, all within the warm and authentic ambiance </p>
                  <div class="row g-4 mb-4">
                      <div class="col-sm-6">
                          <div class="d-flex align-items-center border-start border-5 border-dark px-3">
                              <h1 class="flex-shrink-0 display-5  mb-0" data-toggle="counter-up">15</h1>
                              <div class="ps-4">
                                  <p class="mb-0">Years of</p>
                                  <h6 class="text-uppercase mb-0">Experience</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="d-flex align-items-center border-start border-5 border-dark px-3">
                              <h1 class="flex-shrink-0 display-5  mb-0" data-toggle="counter-up">50</h1>
                              <div class="ps-4">
                                  <p class="mb-0">Popular</p>
                                  <h6 class="text-uppercase mb-0">Master Chefs</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              <a className="btn btn-success py-3 px-5 mt-2" href="/login">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container-xxl pt-5 pb-5 ">
        <div className="container">
             {/* using animation in below */}
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h5 className="section-title ff-secondary text-center fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* ... (HTML code for the first team member) */}
              <div class="team-item text-center rounded overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src={team1} alt=""/>
                    </div>
                    <h5 class="mb-0">John Doe</h5>
                    <small>Head Chef</small>
                    <div class="d-flex justify-content-center mt-3">
                         {/* using icons in below */}
                    <a class="btn btn-square btn-outline-dark mx-1" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
            {/* ... (similar structure for other team members) */}
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s"style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn' }}>
                <div class="team-item text-center rounded overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src={team2} alt=""/>
                    </div>
                    <h5 class="mb-0">David Miller</h5>
                    <small>Head Chef</small>
                    <div class="d-flex justify-content-center mt-3">
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn' }}>
                <div class="team-item text-center rounded overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src={team3}alt=""/>
                    </div>
                    <h5 class="mb-0">Joe Franklin</h5>
                    <small>Chef</small>
                    <div class="d-flex justify-content-center mt-3">
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn' }}>
                <div class="team-item text-center rounded overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src={team4} alt=""/>
                    </div>
                    <h5 class="mb-0">Allen Cooper</h5>
                    <small>Chef</small>
                    <div class="d-flex justify-content-center mt-3">
                        <a class="btn btn-square btn-outline-dark  mx-1" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a class="btn btn-square btn-outline-dark mx-1" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
