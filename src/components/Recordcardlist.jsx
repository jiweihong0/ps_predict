import React from "react";
import Recordcard from "./Reacordcard";

export default function Recordcardlist() {
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" ,height:"100%",width:"100%"}}>
            <div style={{marginTop:"30px"}}></div>
            <Recordcard  data = {123}/>
            <Recordcard />  
            <Recordcard />
            <Recordcard />
        </div>
    );
    }