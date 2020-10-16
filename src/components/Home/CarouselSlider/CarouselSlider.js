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

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

const CarouselSlider = () => {
    return (
        <div className="carousel-slider">
            <h1 style={{ textAlign: "center", color: "#fff"}}>Here are some of <span style={{color:'#7AB259'}}>our works</span></h1>
            <div className="carousel-card">
                <Carousel breakPoints={breakPoints}>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide1} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide2} alt=""/></CarouselCard>
                <CarouselCard><img className="img-fluid" style={{borderRadius: "10px"}} src={slide3} alt=""/></CarouselCard>
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