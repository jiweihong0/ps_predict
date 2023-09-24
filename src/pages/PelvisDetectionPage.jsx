import React from "react";
import Header from "../components/header/Header";
import PelvisDetectioncard from "../components/pelvis/PelvisDetectioncard";




function PelvisDetectionPage() {

    return ( 
        <div style={{backgroundColor:"#FFFBEB", width:"100%",height:"100vh"}}>
            <Header />
            <PelvisDetectioncard/>
        </div>
    );
}

export default PelvisDetectionPage;