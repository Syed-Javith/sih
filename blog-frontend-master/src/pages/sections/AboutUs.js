import React from 'react'
import javithImage from '../../images/rsj.png';
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
                <img src={javithImage} height={200} width={300} className='about-us-pic' alt='rsj'/>
            </div>
            <div className='col-lg-4 profile'>
                <div className='row'>
                  <h5>About</h5>
                <p>I'm Syed Javith, an enthusiastic web developer dedicated to simplifying life through technology. I believe in collaboration and communication. I'm eager to partner with you to bring your ideas to life.So whether you're an entrepreneur with a vision or a fellow developer seeking inspiration, you're in the right place.</p>
                </div>
                <div className='row contact'>
                <h5>Contact</h5>
                <Contact />

                </div>
            {/* <p>Feel free to explore my portfolio, dive into my blog posts, and don't hesitate to drop me a message. Let's create, innovate, and simplify together!</p> */}
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
