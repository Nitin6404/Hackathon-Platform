// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to the Hackathon Platform
                </Typography>
                <Typography variant="body1">Participate in the hackathon and showcase your skills!</Typography>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
