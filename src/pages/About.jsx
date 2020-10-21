import React from 'react';
import Common from './Common';
import web from '../images/fireball.png';


const About = ()=>{
    return(
      <>
      <Common
       title="Welcome to About Page of"
       btnText="Contact Now"
       visit="/contact"
       imageSrc={web}
      />
      </>
    );
}

export default About;