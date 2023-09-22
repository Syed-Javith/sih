import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import peernet from '../images/peernet.png'

const Register = () => {
  const [user , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [collegeName , setCollegeName] = useState("");
  const [isAdmin , setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = (e)=>{

      e.preventDefault();
      console.log(user + " "+password + " "+collegeName + " "+isAdmin);

      const url = 'http://localhost:5000/auth/register';
      const data = {
          username : user ,
          password : password,
          college : collegeName,
          isAdmin : isAdmin
      }
      axios.post(url,data)
      .then((result) => {
          console.log(result);
          if(result.data?.UserAlreadyFound === true){
            console.log("user found already...");
            navigate('/login');
          }else{
            console.log("registered");
            navigate('/login');
          }
      }).catch((err) => {
          navigate("*");
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
              <h1 style={{color : "white"}}>Register Here</h1>
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

              <div className="form-group">
              <label htmlFor="exampleInputPassword1">College Name</label>
              <input name='collegename' onChange={(e)=> setCollegeName(e.target.value)} type="text" className="form-control" id="exampleInputcollegename1" placeholder="collegename"/>
              </div>

              <div className="form-group">
                <label htmlFor="isAdmin">Are you a Admin ?</label>
                <input
                  name="isAdmin"
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  type="checkbox"
                  id="isAdmin"
                  checked={isAdmin}
                />
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
