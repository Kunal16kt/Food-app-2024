import React , { useEffect }from "react";
import { Carousel, Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs'

const Slides = () => {
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  })
  return (
    <div className="bg-light text-dark container px-4 py-5 display-cover p-0 objectFit-cover wow bounceInUp" data-wow-delay="0.3s">
      <section className="favourites-section">
        <Container>
          <Row>
            <Col xs={12} sm={9} className="favourites-section-label py-3">
              <h2 className="m-0 animate__animated animate__fadeIn">Explore the rich world of global flavors with Worldly Whisk!</h2>
            </Col>
          </Row>
          <Row>
            <Col className="sm-pr-none no-padding">
              <Carousel>
                <Carousel.Item>
                  <div className="carousel-slider">
                    <div className="card bg-dark text-white content">
                      <div className="content-overlay"></div>
                      <img
                        alt="Dhokla"
                        height="500"
                        width="100%"
                        src="https://b.zmtcdn.com/data/pictures/chains/0/550/d04c74486a9c2f5bb891263a5ac9d63b.jpg"
                      />
                      <Carousel.Caption>
                        <h5>Dhokla</h5>
                        <p>
                        Savor the Authentic Flavors of Gujarat: Experience the Soft, Spongy Bliss of Dhokla
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="coffee-slider">
                    <div className="card bg-dark text-white content">
                      <div className="content-overlay"></div>
                      <img
                        alt="thali"
                        height="500"
                        width="100%"
                        src="https://b.zmtcdn.com/data/pictures/chains/0/550/0385c2a585695eda80703c31b5739b21_featured_v2.jpg"
                        className="card-img"
                      />
                      <Carousel.Caption className="text-dark">
                        <h5>Thalis</h5>
                        <p>
                        Embark on a Culinary Journey Across India: Indulge in the Rich Tapestry of Flavors with Our Diverse Thalis
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="coffee-slider">
                    <div className="card bg-dark text-white content">
                      <div className="content-overlay"></div>
                      <img
                        alt="chole-bhature"
                        height="500"
                        width="100%"
                        src="https://b.zmtcdn.com/data/pictures/chains/0/550/b8590ab0752049c4bf8532b4520c152a.jpg"
                        className="card-img"
                      />
                      <Carousel.Caption>
                        <h5>Chole Bhature</h5>
                        <p>
                        "Dive into Delhi's Culinary Heart: Indulge in the Irresistible Harmony of Spices and Fluffiness with Our Authentic Chole Bhature"
                        </p>
                      </Carousel.Caption>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Slides;
