import React from "react";
import Recordcard from "./Reacordcard";
import useRecordListAdmin from "../../hooks/useRecordListAdmin";


export default function RecordlistAdmin() {
    const {isdata} = useRecordListAdmin();
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", alignItems:"center" ,height:"100%",width:"100%",overflow:"visible"}}>
           
            {
                isdata.userRelatedDatetime.map((item,index) => {
                    return <Recordcard key={index} item={item} data={isdata.userRelatedDatetime[index]}/>
                })
            }
        </div>
    );
    }