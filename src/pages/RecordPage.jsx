// create main page component and import Header component
import React from 'react';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Recordcard from '../components/Reacordcard';

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
        <div>
            <Header />
            <Recordcard/>
            
        </div>
    );
}