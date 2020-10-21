import React from 'react';
import Common from './Common';
import web from '../images/fireball.png';
const Home = () => {
  return (
    <>
      <Common 
        title="Grow your business with"
        btnText="Get Started"
        visit="/service"
        imageSrc={web}
      />
    </>
  );
}

export default Home;