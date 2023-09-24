import React from "react";
import Header from "../components/header/Header";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SpineDetectioncard from "../components/spine/SpineDetectioncard";


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
        <div style={{backgroundColor:"#FFFBEB", width:"100%",height:"100vh"}}>
            <Header />
            <SpineDetectioncard/>
        </div>
    );
}

export default SpineDetectionPage;