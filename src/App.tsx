import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import Round1 from './pages/Round1';
import Round2 from './pages/Round2';
import Round3 from './pages/Round3';
import FinalRound from './pages/FinalRound';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/round1" element={<Round1 />} />
                <Route path="/round2" element={<Round2 />} />
                <Route path="/round3" element={<Round3 />} />
                <Route path="/finalround" element={<FinalRound />} />
            </Routes>
        </Router>
    );
};

export default App;
