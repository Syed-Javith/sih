import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/userContext';
import axios from 'axios';

const Register = () => {
  const { setUser } = useUser();

  const [user , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e)=>{

      e.preventDefault();
      console.log(user + " "+password);

      const url = 'http://localhost:5000/auth/register';
      const data = {
          username : user ,
          password : password
      }
      axios.post(url,data)
      .then((result) => {
          console.log(result);
          if(result.data?.UserAlreadyFound === true){
            console.log("user found already...");
          }else{
            console.log("registered");
          }
      }).catch((err) => {
          navigate("*");
      });
  }


return (
  <div className='login-main'>
    <div className='container'>
      <div className='row d-flex flex-row justify-content-center'>
          <div className='col-lg-4 '>
              <h1 style={{color : "white"}}>Login Here</h1>
          <form onSubmit={(e) => login(e)} method='post'>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input name='userid' onChange={(e)=> setUserName(e.target.value)}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name='password' onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
      </div>
    </div>
  </div>
)
}
export default Register
