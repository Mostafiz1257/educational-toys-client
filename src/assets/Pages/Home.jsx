import React from 'react';
import Banner from './Home/Banner';
import Gallary from './Home/Gallary';
import FeedBack from './Home/FeedBack';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallary></Gallary>
          <FeedBack></FeedBack>
        </div>
    );
};

export default Home;