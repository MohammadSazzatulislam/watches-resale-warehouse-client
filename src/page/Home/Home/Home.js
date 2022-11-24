import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Categories/Products/Products';
import NewsSection from '../NewsSection/NewsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewsSection></NewsSection>
        </div>
    );
};

export default Home;