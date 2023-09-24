import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useUser } from '../contexts/userContext';
import RequestCard from '../components/Admin/RequestCard';
import { useNavigate } from 'react-router-dom';
import { getRequests } from '../apis/adminApis';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Admin = () => {
    const {requests , setRequests} = useUser();
    const navigate = useNavigate();
    const user = cookies.get('user');

    // const [requests , setRequests] =useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);

    useEffect(()=>{
        const GetRequests = async ()=>{
         try {
          const userRequests =  await getRequests(user?.username)
          setRequests(userRequests);
         } catch (error) {
          console.log(error);
         }
      }

      GetRequests();

    },[requests]);


  return (
    <div id="admin">

<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color : "white"}} href="#">Peernet</a>
            <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarNav">
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
