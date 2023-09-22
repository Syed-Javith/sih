import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const NavBar = () => {

    const classes = "btn btn-outline-light home-btns";
    const userData = JSON.parse(localStorage.getItem('userData'));
    const location = useLocation();

  return (
    <div>
      <>
        {
            userData?.isAdmin && <Link className={classes} to='/admin' >Admin</Link>
        }
        <Link to='/login' className={classes}>Login</Link>
        <Link to='/register' className={classes}>Regiter</Link>
        {
          location !== '' && <Link to='/' className={classes} >Home</Link>
        }
    </>
    </div>
  )
}

export default NavBar
