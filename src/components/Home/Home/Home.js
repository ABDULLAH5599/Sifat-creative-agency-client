import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <CarouselSlider></CarouselSlider>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;