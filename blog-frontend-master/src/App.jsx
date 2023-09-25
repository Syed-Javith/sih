
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from './pages/Register';
import { UserProvider } from './contexts/userContext';
import Error from './pages/Error';
import Admin from './pages/Admin';
import ProtectedRoutes from './contexts/ProtectedRoutes';
import Statistics from './pages/sections/Admin/Statistics';
import Request from './pages/sections/Admin/Request';


function App() {

  return (
    <UserProvider >
 <Router>
  <Routes>
  <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register />}/>
    <Route path='*' element={<Error/>} /> 

    <Route 
    path='/admin'
    element={
      <ProtectedRoutes >
         <Admin />
      </ProtectedRoutes>
    }>
      <Route path='requests' element={<Request />} index/>
      <Route path='statistics' element={<Statistics />}/>
    </Route>
  </Routes>

 </Router>
 </UserProvider>
  );
}

export default App;
