import React, { useEffect } from 'react'
import HomeLink from '../../components/Home/HomeLink'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/userContext'
import axios from 'axios'
import HomeCarousel from '../../components/Home/HomeCarousel'
import HomeContent from '../../components/Home/HomeContent'

const Home = (props) => {

  const { user  , setUser } = useUser();


  const logout = ()=>{
    const url = "http://localhost:5000/auth/logout/"

    axios.post(url)
    .then((result) => {
      alert("logged out successfully");
      setUser(null);
    }).catch((err) => {
      console.log(err);
    });
  }

  

  return (
    <section id={props.id}>
        <div className='home'>
            <div className='container-fluid'>
            <div className='row d-flex flex-row'>
            <div className='col-lg-6 mr-auto'>
          
            <div className='container head-container'>
            <h1> PeerNet </h1>
            <hr className='hr'/>
            <HomeContent/>
            </div>
      </div>

      <div className='col-lg-6' >
        <div className='d-flex flex-row-reverse'>
        { user == null || user?.username == null ? 
        <>
        <Link to='/login' className='btn btn-outline-light home-btns'>Login</Link>
        <Link to='/register' className='btn btn-outline-light home-btns'>Regiter</Link>
        </> : 
        <>
        <p className='username'>{user?.username}</p>
        <a onClick={logout} className='btn btn-outline-light home-btns'>logout</a>  
        </>
        }
        </div>
        <div className='d-flex flex-row-reverse'>
          <HomeLink refer="#about-us" title="About Us"/>
          <HomeLink refer="#posts" title="Posts"/>
          <HomeLink refer="#" title="Home"/>
        </div>
        <div className='right-home'>
          <HomeCarousel/>
        </div>
      </div>
    </div>
    </div>
   </div>
    </section>
  )
}

export default Home
