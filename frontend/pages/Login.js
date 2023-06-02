import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/Login', { username, password });
      if (response.data.success) {
        router.push('/Shop'); // Redirect to Shop page after successful login
      } else {
        setError('Incorrect login credentials'); // Set error message for incorrect login
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
        <form onSubmit={handleLogin}>
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
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Login
          </Button>
        </form>
        <Typography variant="body1" style={{ color: 'gray' }}>
          Don't have an account?{' '}
          <Link href="/Register" passHref>
            <Typography
              component="a"
              style={{ color: 'green', textDecoration: 'underline' }}
              variant="body1"
              legacyBehavior
            >
              Register here
            </Typography>
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
