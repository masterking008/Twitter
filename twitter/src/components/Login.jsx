// src/components/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password).then(
            response => {
                setMessage('Login successful!');
                navigate('/');
            },
            error => {
                setMessage('Login failed.');
            }
        );
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Card className='p-4'>
        
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button type="submit">Login</Button>
            </form>
            {message && <p>{message}</p>}

            <a href="./">New User</a>

                    
            </Card>
        </div>
    );
};

export default Login;
