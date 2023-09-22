import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useUser } from '../contexts/userContext';
import axios from 'axios';
import RequestCard from '../components/Admin/RequestCard';
import { useNavigate } from 'react-router-dom';
import { getRequests } from '../apis/adminApis';

const Admin = () => {
    const {user , requests , setRequests} = useUser();
    const navigate = useNavigate();

    // const [requests , setRequests] =useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);

    useEffect(()=>{
        
        // const url =`http://localhost:500/admin/request/${userData?.username}`;
        // console.log(url);

        // axios.get(url)
        // .then((result) => {
        //     // console.log("result");
        //     // console.log(result);
        //     setRequests(result.data.requests);
        // }).catch((err) => {
        //     console.log("erroe");
        //     console.log(err);
        // });


        const GetRequests = async ()=>{
         try {
          const userRequests =  await getRequests(userData?.username)
          setRequests(userRequests);
         } catch (error) {
          console.log(error);
         }
      }

      GetRequests();

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
