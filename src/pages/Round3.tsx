import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';

const Round3: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Round 3
                </Typography>
                <Typography variant="body1">Details about Round 3.</Typography>
            </Container>
            <Footer />
        </>
    );
};

export default Round3;
