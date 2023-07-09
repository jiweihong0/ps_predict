import React from "react";
import Header from "../components/Header";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PelvisDetectioncard from "../components/PelvisDetectioncard";



function PelvisDetectionPage() {
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
            <PelvisDetectioncard/>
        </div>
    );
}

export default PelvisDetectionPage;