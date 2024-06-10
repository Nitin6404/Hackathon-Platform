import React, { useState } from 'react';
import { signIn } from '../services/auth';
import CustomButton from '../components/Button';
import CustomInput from '../components/Input';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        const { data, error } = await signIn(email, password);
        if (error) {
            setMessage(error.message);
            setOpen(true);
        } else {
            setMessage('Login successful');
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h1>Login</h1>
            <CustomInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <CustomInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <CustomButton label="Login" onClick={handleLogin} />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.includes('successful') ? 'success' : 'error'}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default LoginPage;
