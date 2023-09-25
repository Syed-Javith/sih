import React from 'react'
import NavBar from '../components/NavBar'
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    

  return (
    <div id="admin">

<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/admin'} className="navbar-brand" style={{color : "white"}} >Peernet</Link>
            <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarNav">
              <NavBar />
            </div>
        </div>
      </nav>

      <div className="vertical-tab">
      <div className='links'>
        <Link to={'/admin/statistics'} >Stats</Link>
      </div>
      <div className='links'>
        <Link to={'/admin/requests'} >Requestss</Link>
      </div>
      </div>
      

      <Outlet />
      </div>

  )
}

export default Admin
