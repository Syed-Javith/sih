import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useUser } from '../contexts/userContext';
import axios from 'axios';
import RequestCard from '../components/Admin/RequestCard';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const {user , requests , setRequests} = useUser();
    const navigate = useNavigate();

    // const [requests , setRequests] =useState([]);

    useEffect(()=>{
        
        const url =`http://localhost:5000/admin/req/${user?.username}`;
        console.log(url);

        axios.get(url)
        .then((result) => {
            console.log("result");
            console.log(result);
            setRequests(result.data.requests);
        }).catch((err) => {
            console.log(err);
        });
    },[requests]);


  return (
    <div id="admin">
        {/* <NavBar />
      Admin {user?.username
      } */}


<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color : "white"}} href="#">Peernet</a>
          <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
          <div className="collapse navbar-collapse" id="navbarNav">
            
            
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="demo.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Student request</a>
              </li>
              
            </ul> */}
            <NavBar />
          </div>
        </div>
      </nav>

      <div className='row row-admin'>
      <div className='col-lg-3'>
      {
        requests?.length && requests.map((req) =>{
            if(!req.isApproved)
            return <RequestCard request={req}/>
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Admin
