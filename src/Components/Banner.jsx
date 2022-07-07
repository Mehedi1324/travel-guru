import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button, Col, Row } from 'react-bootstrap';
import './Styling/Banner.scss';
import Slider from 'react-slick';
const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: 'absolute',
          left: '7%',
          top: '100%',
          zIndex: ' 100000',
          margin: '50px 0px',
          width: '100px',
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: 'absolute',
          left: '2%',

          top: '100%',
          zIndex: ' 100000',
          margin: '50px 0px',
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    speed: 500,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="banner">
      <Row className="">
        <Col md={12} lg={5} sm={12} className="col1">
          <h1>Never Stop Exploring</h1>
          <p>
            Since 2014, we’ve helped more than 500,000 people of all ages enjoy
            the best outdoor experience of their lives. Whether it’s for one day
            or a two-week vacation, close to home or a foreign land.
          </p>
          <Button variant="outline-warning">
            Booking <FaArrowRight />
          </Button>{' '}
        </Col>
        <Col md={12} lg={7} sm={12}>
          <Slider {...settings} className="slider">
            <div className="img__contner">
              <img src="./image/cox.png" alt="" />
              <div className="img__cntnt">
                <h3>COX'S BAZAR</h3>
              </div>
            </div>

            <div className="img__contner">
              <img src="./image/Sajek.png" alt="" />
              <div className="img__cntnt">
                <h3>SAJEK VALLEY</h3>
              </div>
            </div>
            <div className="img__contner">
              <img src="./image/sreemongol.png" alt="" />
              <div className="img__cntnt">
                <h3>SREEMANGAL</h3>
              </div>
            </div>
            <div className="img__contner">
              <img src="./image/sundorbon.png" alt="" />
              <div className="img__cntnt">
                <h3>SUNDARBAN</h3>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
