import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./imagenesSlide.css"

export default function ImagenesSlide ({ slides }) {
  return (
    <Carousel className="carrusel-2" infiniteLoop>
      {slides.map((slide, index) => {
        return <Image key={index} src={slide.image} height="auto" width="400px" />;
      })}
    </Carousel>
  );
};


