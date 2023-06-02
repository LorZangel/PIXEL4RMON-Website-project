import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
}));

export default function Home() {
  const classes = useStyles();

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
      <div
        style={{
          background: '#ffffff',
          width: '80%',
          padding: '2rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ width: '200px' }} />
        <h2 style={{ marginTop: '1rem' }}>Welcome to PIXEL4RMON</h2>
        <h3 style={{ marginTop: '1rem' }}>Are you ready to start your own journey with us?</h3>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<FontAwesomeIcon icon={faDiscord} />}
          href="https://discord.gg/cobblemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join us!
        </Button>
      </div>
    </div>
  );
}
