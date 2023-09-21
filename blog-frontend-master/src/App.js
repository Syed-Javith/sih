import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from './pages/Register';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <UserProvider >
 <Router>
  <Routes>
  <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register />}/>
    
  </Routes>

 </Router>
 </UserProvider>
  );
}

export default App;
