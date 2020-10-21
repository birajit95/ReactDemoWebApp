import React from 'react';
import Common from './Common';


const Contact = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center mb-5 getInTouch'>Get in touch</h1>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-md-4 col-10 mx-auto'>
              <div className="bg-div">
                <div className="mb-3">
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Aryan Nath" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div><div className="mb-3">

                  <label for="phone" className="form-label">Contact</label>
                  <input type="email" className="form-control" id="phone" placeholder="991********" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;