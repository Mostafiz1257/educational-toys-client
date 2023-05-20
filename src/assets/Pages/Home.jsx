import React from 'react';
import Banner from './Home/Banner';
import Gallary from './Home/Gallary';
import FeedBack from './Home/FeedBack';
import Sponsoor from './Home/Sponsoor';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  useTitle('Home')
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