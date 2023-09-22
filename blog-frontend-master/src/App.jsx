import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom';
import Register from './pages/Register';
import { UserProvider, useUser } from './contexts/userContext';
import axios from 'axios';
import Error from './pages/Error';
import { useEffect } from 'react';
import Admin from './pages/Admin';

function App() {

  const {setUser} = useUser();
  useEffect(()=>{
    axios.get('/auth/user')
  .then((result) => {
    console.log(result);
    setUser(result.data.user);
  }).catch((err) => {
  });
  },[setUser])

  return (
    <UserProvider >
 <Router>
  <Routes>
  <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register />}/>
    <Route path='/admin' element={<Admin />} />
    <Route path='*' element={<Error/>} /> 
  </Routes>

 </Router>
 </UserProvider>
  );
}

export default App;
