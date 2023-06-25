import React from "react";
import Recordcard from "./Reacordcard";

export default function Recordcardlist() {
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div style={{marginTop:"30px"}}></div>
            <Recordcard />
            <Recordcard />  
            <Recordcard />
            <Recordcard />
        </div>
    );
    }