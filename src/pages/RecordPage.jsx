// create main page component and import Header component
import React from 'react';
import Header from '../components/header/Header';
import Recordcardlist from '../components/record/Recordcardlist';

export default function RecordPage() {
   
    
    return (
        <div style={{minHeight:"100vh",height: "100%", backgroundColor:"#FFFBEB" }}>
            <Header />
            <Recordcardlist/>
            
        </div>
    );
}