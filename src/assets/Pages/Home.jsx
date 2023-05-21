import React from 'react';
import Banner from './Home/Banner';
import Gallary from './Home/Gallary';
import FeedBack from './Home/FeedBack';
import Sponsoor from './Home/Sponsoor';
import useTitle from '../../hooks/useTitle';
import Sub_Category from './Home/Sub_Category';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner>
          <Gallary></Gallary>
          <Sub_Category></Sub_Category>
          <FeedBack></FeedBack>
          <Sponsoor></Sponsoor>
        </div>
    );
};

export default Home;