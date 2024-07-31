
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import authService from '../services/authService';

function LogReg() {

    const [log, setLog] = useState(false)
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

    
    function handleLog() {
        setLog(!log)
    }
    return (
        <>
            {log ? <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Card className='p-4'>

                <div className="container mt-5">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary mt-3" type="submit">
                    Login
                </Button>
            </Form>

            <div className="mt-4">
                <Button variant="link" onClick={handleLog}>
                    New User
                </Button>
            </div>
        </div>


                </Card>
            </div> :  <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Card className='p-4'>
                <h2>Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary mt-3" type="submit">
                        Register
                    </Button>
                </Form>

                {message && (
                    <Alert variant="success" className="mt-3">
                        {message}
                    </Alert>
                )}

                <Button variant="link" className='m-4' onClick={handleLog}>
                    Login
                </Button>
            </Card>
        </div>}
        </>
    )


}

export default LogReg