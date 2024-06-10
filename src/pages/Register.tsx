import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import supabase from '../services/supabaseClient'

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else alert('Registration successful, please check your email to confirm your registration');
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Register</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
