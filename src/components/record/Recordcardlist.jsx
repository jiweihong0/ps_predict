import React from "react";
import Recordcard from "./Reacordcard";

export default function Recordcardlist() {
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", alignItems:"center" ,height:"100%",width:"100%",overflow:"hidden"}}>
           
            <Recordcard  data = {123}/>
            <Recordcard />  
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
            <Recordcard />
        </div>
    );
    }