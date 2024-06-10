import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Round1 from './pages/Round1';
import Round2 from './pages/Round2';
import Round3 from './pages/Round3';
import FinalRound from './pages/FinalRound';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/round1" element={<Round1 />} />
                    <Route path="/round2" element={<Round2 />} />
                    <Route path="/round3" element={<Round3 />} />
                    <Route path="/final-round" element={<FinalRound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
