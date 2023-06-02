import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const RootContainer = styled('div')({
  backgroundImage: `url('/background.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Container = styled('div')({
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  textAlign: 'center',
});

const QRCodeImage = styled('img')({
  width: '200px',
  height: '200px',
  marginBottom: '1rem',
});

const ErrorText = styled(Typography)({
  color: 'red',
  marginTop: '0.5rem',
});

const CheckoutPage = () => {
  return (
    <RootContainer>
      <Container>
        <Typography variant="h2">Checkout</Typography>
        <Box mt={2} mb={2}>
          <QRCodeImage src="/qrcode.png" alt="QR Code" />
        </Box>
        <ErrorText>Please send the bill to the admin.</ErrorText>
        <ErrorText>You can close this page at any time.</ErrorText>
      </Container>
    </RootContainer>
  );
};

export default CheckoutPage;
