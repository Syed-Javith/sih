import React from 'react'
import peernet from '../../images/peernet.png';
import Contact from '../../components/Footer/Contact';
import FollowUs from '../../components/Footer/FollowUs';
import VisitOthers from '../../components/Footer/VisitOthers';

const AboutUs = (props) => {
  return (
    <section id={props.id} >
        <div className='container'>
          <div className='row about-us-col'>
            {/* <h1 className='center'>About Us</h1> */}
            <div className='col-lg-4 img-rsj'>
                <img src={peernet} height={300} width={300} className='about-us-pic' alt='rsj'/>
            </div>
            <div className='col-lg-4 profile'>
                <div className='row'>
                  <h5>Join Us in the Journey</h5>
                <p>

We invite universities, colleges, students, and educators to join us in this exciting journey towards a brighter and more innovative future for education. Together, we can create a community that celebrates knowledge, innovation, and academic excellence.

Thank you for being a part of Peernet. We look forward to shaping the future of education alongside you.</p>
                </div>
                <div className='row contact'>
                <h5>Contact</h5>
                <Contact />

                </div>
              </div>
            <div className='col-lg-4 profile'>
              <FollowUs />
              <VisitOthers />
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs
