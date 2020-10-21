import React from 'react';
import Card from '../componants/Card';
import image1 from '../images/website.jpg';
import image2 from '../images/s1.jpg';
import image3 from '../images/s2.jpg';
import image4 from '../images/s3.jpg';
import image5 from '../images/s4.jpg';
import image6 from '../images/s5.jpg';




const Service = ()=>{
    return(
      <>
      <div className='my-5'>
        <h1 className='text-center mb-5'>Our Services</h1>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <Card imgSrc={image1} />
                <Card imgSrc={image2} />
                <Card imgSrc={image3} />
                <Card imgSrc={image4} />
                <Card imgSrc={image5} />
                <Card imgSrc={image6} />
                <Card imgSrc={image1} />
                <Card imgSrc={image4} />

                <div className="col-md-4 col-10 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    );
}

export default Service;