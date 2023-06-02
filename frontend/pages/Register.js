import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Link from 'next/link';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/Register', {
        username,
        email,
        password,
      });
      if (response.data.success) {
        router.push('/Login'); // Redirect to Login page after successful registration
      } else {
        setError('Registration failed'); // Set error message for failed registration
      }
    } catch (error) {
      setError('An error occurred'); // Set error message for general error
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: '400px',
          padding: '2rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ width: '200px' }} />
        <form onSubmit={handleRegister}>
          <TextField
            type="text"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          {error && (
            <Typography variant="body1" style={{ color: 'red', marginBottom: '1rem' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: '1rem' }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body1" style={{ color: 'gray' }}>
          Already have an account?{' '}
          <Link href="/Login" passHref>
            <Typography
              component="a"
              style={{ color: 'green', textDecoration: 'underline' }}
              variant="body1"
              legacyBehavior
            >
              Login here
            </Typography>
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Register;
