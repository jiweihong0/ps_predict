// create main page component and import Header component
import React from 'react';
import Header from '../components/header/Header';
import Recordcardlist from '../components/record/Recordcardlist';
import Footer from '../components/footer/Footer';

export default function RecordPage() {
   
    
    return (
        <div style={{height:"100vh"}}>
            <Header />
            <Recordcardlist/>
            
        </div>
    );
}