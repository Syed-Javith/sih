import React, { useEffect } from 'react'
import { useUser } from '../../../contexts/userContext';
import Cookies from 'universal-cookie';
import { getRequests } from '../../../apis/adminApis';
import RequestCard from '../../../components/Admin/RequestCard';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();
const Request = () => {

    const {requests , setRequests} = useUser();
    const navigate = useNavigate();
    const user = cookies.get('user');
    useEffect(()=>{
        const GetRequests = async ()=>{
         try {
          const userRequests =  await getRequests(user?.username);
        //   console.log(userRequests);
        //   console.log();
          setRequests(userRequests);
         } catch (error) {
          console.log(error);
         }
      }

      GetRequests();

    },[requests]);

  return (
    <div id='admin-requests'>
      <h1>Your Requests Here</h1>

<div className='row row-admin'>
{
  requests?.length && requests.map((req) =>{
      if(!req.isApproved)
      return <RequestCard request={req}/>
  })
}
</div>
    </div>
  )
}

export default Request
