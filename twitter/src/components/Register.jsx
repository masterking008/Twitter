import React, { useState } from 'react';
import authService from '../services/authService';
import { Button, Card } from 'react-bootstrap';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        authService.register(username, password).then(
            response => {
                setMessage('Registration successful!');
            },
            error => {
                setMessage(error.response.data);  // Show backend error message
            }
        );
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 min-vh-100">
            <Card className='p-4'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button type="submit">Register</Button>
            </form>
            {message && <p>{message}</p>}

            <a href="./login">Login</a>
            </Card>
        </div>
    );
};

export default Register;
