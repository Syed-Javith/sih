import React, { useEffect } from 'react'
import HomeLink from '../../components/Home/HomeLink'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/userContext'
import peernet from '../../images/peernet.png'
import axios from 'axios'
import HomeCarousel from '../../components/Home/HomeCarousel'
import HomeContent from '../../components/Home/HomeContent'
import NavBar from '../../components/NavBar'

const Home = (props) => {

  const { user  , setUser , isAdmin} = useUser();


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
        <NavBar /> : 
        <>
        <p className='username'>{user?.username}</p>
        <a onClick={logout} className='btn btn-outline-light home-btns'>logout</a>
        {
        isAdmin && <Link className='btn btn-outline-light home-btns' to='/admin' >Admin</Link>
}  
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
