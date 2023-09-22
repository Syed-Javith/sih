import React from 'react'
import AboutUs from './sections/AboutUs';
import Home from './sections/Home';
import Post from './sections/Post';
const HomePage = () => {
  return (
    <>
    <Home id="home" />
    <Post id="posts"/>
    <AboutUs id="about-us"/> 
   </>
 
  )
}

export default HomePage
