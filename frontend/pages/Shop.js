import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = styled(Card)(({ theme }) => ({
  background: '#ffffff',
  width: '300px',
  padding: '1rem',
  borderRadius: '10px',
  margin: '1rem',
  textAlign: 'center',
}));

const ProductName = styled(Typography)(({ theme }) => ({
  marginBottom: '1rem',
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '1rem',
}));

const ProductPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '1rem',
}));

const PurchaseButton = styled(Button)(({ theme }) => ({
  background: 'green',
  color: '#ffffff',
  '&:hover': {
    background: 'darkgreen',
  },
}));

const products = [
  {
    id: 1,
    name: 'Minecraft Diamond Sword',
    price: 10,
    image: '/minecraft_diamond_sword.jpg',
  },
  {
    id: 2,
    name: 'Minecraft Creeper Plush',
    price: 15,
    image: '/minecraft_creeper_plush.jpg',
  },
  {
    id: 3,
    name: 'Minecraft Steve Figure',
    price: 20,
    image: '/minecraft_steve_figure.jpg',
  },
];

const Shop = () => {
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
        flexWrap: 'wrap',
        padding: '2rem',
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductName variant="h5">{product.name}</ProductName>
          <ProductImage component="img" alt={product.name} image={product.image} />
          <ProductPrice variant="h6">Price: ${product.price}</ProductPrice>
          <PurchaseButton variant="contained">
            <a href="/ProductPurchase" style={{ textDecoration: 'none', color: 'inherit' }}>
              Purchase
            </a>
          </PurchaseButton>
        </ProductCard>
      ))}
    </div>
  );
};

export default Shop;
