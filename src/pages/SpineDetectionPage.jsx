import React from "react";
import Header from "../components/Header";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function SpineDetectionPage() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    
    async function handleLogout() {
        try {
        await logout();
        navigate('/login');
        } catch {
        console.log('Failed to log out');
        }
    }
    return ( 
        <>
            <Header />
        </>
    );
}

export default SpineDetectionPage;