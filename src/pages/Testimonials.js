

import React from "react";
import { Carousel } from "react-bootstrap";

function Testimonials() {
  return (
    <Carousel>
      <Carousel.Item>
        <p className="text-center">"Amazing service!"</p>
        <small className="text-muted">- Client A</small>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-center">"Highly recommended!"</p>
        <small className="text-muted">- Client B</small>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;
