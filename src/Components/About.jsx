import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <div>
        <h2>About Us</h2>
      </div>
      {/* Descriptions____________ */}
      <div>
        <Row>
          <Col md={12} lg={6} sm={12}></Col>
          <Col md={12} lg={6} sm={12}></Col>
        </Row>
      </div>
      {/* Advertising_____________ */}
      <div>
        <Row>
          <Col md={4} lg={4} sm={10}></Col>
          <Col md={8} lg={8} sm={12}></Col>
        </Row>
      </div>
      {/* Services__________ */}
      <div>
        <Row>
          <Col md={4} lg={3} sm={6}></Col>
          <Col md={4} lg={3} sm={6}></Col>
          <Col md={4} lg={3} sm={6}></Col>
          <Col md={4} lg={3} sm={6}></Col>
        </Row>
      </div>
      {/* Consultation____________ */}
      <div></div>
      {/* Servay_________ */}
      <div></div>
      {/* Customer Review */}
      <div></div>
      {/* Subscribtion__________ */}
      <div></div>
      {/* Footer */}
      <div></div>
    </div>
  );
};

export default About;
