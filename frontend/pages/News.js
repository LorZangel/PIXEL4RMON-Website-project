import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#ffffff',
    width: '80%',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
  media: {
    width: '100%',
  },
}));

const News = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://discord.com/channels/934267676354834442/934267676354834445/1091648351986008115" target="_blank" rel="noopener noreferrer">
            <CardMedia component="img" alt="News" image="/CobblemonCards.png" className={classes.media} />
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default News;
