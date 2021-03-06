import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
             <div className='row'>
             <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h2>
                {props.title} <br/>
                <stron className='brand-name'>ThapaTechnical</stron>
              </h2>
              <h4 className='my-3'>
                We are the team of telented developer making web applications
              </h4>
              <div className="mt-3">
              <NavLink to='/service' className='btn-get-started'>
               {props.btnText}
              </NavLink>
              </div>
             </div>
             <div className='col-md-6 order-1 order-lg-2 header-img'>
             <img src={props.imageSrc} className='img-fluid animated' alt="header-image"/>
            </div>

             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;