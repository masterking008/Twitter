// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const ProtectedRoute = ({ element }) => {
    const { user } = useContext(AuthContext);

    console.log(user)
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return element; // Directly render the element
};

export default ProtectedRoute;
