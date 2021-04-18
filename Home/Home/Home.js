import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import OurPartners from '../OurPartners/OurPartners';
import Projects from '../Projects/Projects';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <OurPartners></OurPartners>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;