import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body1">Your team and project details will appear here.</Typography>
            </Container>
            <Footer />
        </>
    );
};

export default Dashboard;
