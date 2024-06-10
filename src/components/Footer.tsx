import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 2, mt: 'auto' }}>
            <Typography variant="body2" color="textSecondary">
                © 2024 Hackathon Platform
            </Typography>
        </Box>
    );
};

export default Footer;
