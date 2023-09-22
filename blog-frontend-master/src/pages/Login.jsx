import axios from 'axios';
import React, { useState } from 'react'
import { useUser } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import peernet from '../images/peernet.png'
const Login = () => {

    const {setUser , setIsAdmin} = useUser();

    const [user , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);
    const navigate = useNavigate();

    const login = (e)=>{

        e.preventDefault();

        const url = 'http://localhost:5000/auth/login';
        const data = {
            username : user ,
            password : password
        }
        axios.post(url,data)
        .then((result) => {

          if(result.status>=400){
            console.log("error");
            setError(true);
          }
            // console.log(result.data);
            if(result.data?.username){
              // When the user logs in or their data changes
              localStorage.setItem('userData', JSON.stringify(result.data));
              // console.log(localStorage.getItem('userData'));
              setUser(result.data)
              // console.log(result.data.);
              if(result.data.isAdmin==true){
                console.log("admin");
                setIsAdmin(true);
                navigate('/admin');
              }else{
              navigate('/');
              }
            }
        }).catch((err) => {
          setError(true);
        });
    }


  return (
    <div className='login-main'>
      <div className='container'>
        <div className='row d-flex flex-row justify-content-center'>
        <div className='col-lg-6'>
              <img height={400} width={400} src={peernet}/>
          </div>
          <div className='col-lg-6 '>
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

                { error && <p className='error'>Incorrect username or password</p> }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
