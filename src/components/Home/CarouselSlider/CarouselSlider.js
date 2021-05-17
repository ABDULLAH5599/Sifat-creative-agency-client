import React from 'react';
import "./Carousel.css"
import ReactDOM from "react-dom";
import CarouselCard from './CarouselCard'
import Carousel from 'react-elastic-carousel';
import slide1 from '../../../resources/images/carousel-1.png'
import slide2 from '../../../resources/images/carousel-2.png'
import slide3 from '../../../resources/images/carousel-3.png'
import slide4 from '../../../resources/images/carousel-4.png'
import slide5 from '../../../resources/images/carousel-5.png'
import slide6 from '../../../resources/images/carousel-6.jpg'
import slide7 from '../../../resources/images/carousel-7.jpg'
import slide8 from '../../../resources/images/carousel-8.jpg'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

const CarouselSlider = () => {
    return (
        <div className="carousel-slider">
            <h1 style={{ textAlign: "center", color: "#555454"}}>OUR LASTEST <span style={{color:'#fc3030'}}> WORKS</span></h1>
            <div className="carousel-card">
                <Carousel breakPoints={breakPoints}>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide8} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide7} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide6} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide4} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide5} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide1} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide2} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide3} alt=""/></CarouselCard>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselSlider;