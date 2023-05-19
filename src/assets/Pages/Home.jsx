import React from 'react';
import Banner from './Home/Banner';
import Gallary from './Home/Gallary';
import FeedBack from './Home/FeedBack';
import Sponsoor from './Home/Sponsoor';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallary></Gallary>
          <FeedBack></FeedBack>
          <Sponsoor></Sponsoor>
        </div>
    );
};

export default Home;