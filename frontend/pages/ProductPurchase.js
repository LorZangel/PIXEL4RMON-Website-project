import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Button, TextField, Typography } from '@mui/material';

const RootContainer = styled('div')({
  backgroundImage: `url('/background.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContentContainer = styled('div')({
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  textAlign: 'center',
});

const ProductPurchase = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform purchase logic here
    console.log('Purchase Submitted:', formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      address: '',
      quantity: 1,
    });
  };

  return (
    <RootContainer>
      <ContentContainer>
        <Typography variant="h2">Product Purchase</Typography>
        <Typography>Please provide your information to complete the purchase:</Typography>
        <form onSubmit={handleSubmit}>
          <Box marginBottom="1rem">
            <Typography fontWeight="bold" htmlFor="name">
              Name:
            </Typography>
            <TextField
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Box marginBottom="1rem">
            <Typography fontWeight="bold" htmlFor="quantity">
              Quantity:
            </Typography>
            <TextField
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Button type="submit" style={{ background: 'green', color: '#ffffff' }}>
            <a href="/CheckoutPage">Purchase</a>
          </Button>
        </form>
      </ContentContainer>
    </RootContainer>
  );
};

export default ProductPurchase;
