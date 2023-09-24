import React from 'react'
import { Route } from 'react-router-dom'

import Admin from '../pages/Admin';
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const ProtectedRoutes = () => {        
        if(cookies.get('token') && cookies.get('user')?.isAdmin){
            return <Admin />;
        }else{
            return <Navigate to="/" replace />;
        }
}

export default ProtectedRoutes;
