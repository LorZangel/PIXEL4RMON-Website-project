import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#C8E6C9', // Light green background color
  borderBottom: '2px solid #4CAF50', // Harder green border
}));

const Logo = styled('img')(({ theme }) => ({
  width: '100px',
  height: 'auto',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1),
  },
}));

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const renderNavButtons = () => (
    <Box display="flex" alignItems="center">
      <Button color="inherit" sx={{ borderRadius: '20px' }}>
        <Link href="/Home">Home</Link>
      </Button>
      <Button color="inherit" sx={{ borderRadius: '20px' }}>
        <Link href="/News">News</Link>
      </Button>
      <Button color="inherit" sx={{ borderRadius: '20px' }}>
        <Link href="/Login">Shop</Link>
      </Button>
      <Button color="inherit" sx={{ borderRadius: '20px' }}>
        <a href="https://pixel4r.com/" target="_blank" rel="noopener noreferrer">Credit</a>
      </Button>
      <Button color="inherit" sx={{ borderRadius: '20px' }}>
        <a href="https://wiki.cobblemon.com/index.php/Main_Page" target="_blank" rel="noopener noreferrer">Wiki</a>
      </Button>
    </Box>
  );

  const renderDrawer = () => (
    <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <List>
          <ListItem button>
            <ListItemText>
              <Link href="/Home">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/News">News</Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/Login">Shop</Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/Credit">Credit</Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <a href="https://wiki.cobblemon.com/index.php/Main_Page" target="_blank" rel="noopener noreferrer">Wiki</a>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <NavbarContainer position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Logo src="/logo.png" alt="Logo" />
              <Typography variant="h6">PIXEL4RMON</Typography>
            </Box>
            <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
              {renderNavButtons()}
            </Drawer>
          </>
        ) : (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Box display="flex" alignItems="center" flexGrow={1}>
              <Logo src="../logo.png" alt="Logo" />
              <Typography variant="h6">PIXEL4RMON</Typography>
            </Box>
            {renderNavButtons()}
          </>
        )}
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
