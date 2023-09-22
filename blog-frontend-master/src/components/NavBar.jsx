import React from 'react'
import {Link} from 'react-router-dom'
import { useUser } from '../contexts/userContext'
const NavBar = () => {

    const {isAdmin } = useUser();
    const classes = "btn btn-outline-light home-btns";

  return (
    <div>
      <>
        {
            isAdmin && <Link className={classes} to='/admin' >Admin</Link>
        }
        <Link to='/login' className='btn btn-outline-light home-btns'>Login</Link>
        <Link to='/register' className='btn btn-outline-light home-btns'>Regiter</Link>
        <Link to='/' className='btn btn-outline-light home-btns' >Home</Link>
    </>
    </div>
  )
}

export default NavBar
