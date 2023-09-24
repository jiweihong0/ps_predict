// create main page component and import Header component
import React from 'react';
import Header from '../components/header/Header';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Recordcardlist from '../components/record/Recordcardlist';
import Footer from '../components/footer/Footer';

export default function RecordPage() {
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
        <div style={{height:"100"}}>
            <Header />
            <Recordcardlist/>
            <Footer/>
        </div>
    );
}