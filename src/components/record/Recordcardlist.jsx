import React from "react";
import Recordcard from "./Reacordcard";
import useRecordlist from "../../hooks/useRecordlist";


export default function Recordcardlist() {
    const {isdata} = useRecordlist();
    console.log(isdata);
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", alignItems:"center" ,height:"100%",width:"100%",overflow:"hidden"}}>
           
            {
                isdata.userRelatedDatetime.map((item,index) => {
                    return <Recordcard key={index} item={item} data={isdata.userRelatedDatetime[index]}/>
                })
            }
        </div>
    );
    }