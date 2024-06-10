import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';

const FinalRound: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Final Round
                </Typography>
                <Typography variant="body1">Details about the final round.</Typography>
            </Container>
            <Footer />
        </>
    );
};

export default FinalRound;
