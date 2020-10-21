import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
     <>

            <div className="card mx-auto mb-4" style={{width: '18rem'}}>
                <img src={props.imgSrc} className="card-img-top mt-2" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build
                         on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
                    </div>
            </div>
     </>
 );

}

export default Card;