import React from "react";
import Recordcard from "./Reacordcard";


export default function Recordcardlist(props) {
    const {data} = props;
    console.log(data);
    return (
        <div style={{backgroundColor:"#FFFBEB" ,display:"flex", flexDirection:"column", alignItems:"center" ,height:"100%",width:"100%",overflow:"visible"}}>
           
            {
                data.userRelatedDatetime.map((item,index) => {
                    return <Recordcard key={index} item={item} data={data.userRelatedDatetime[index]} />
                })
            }
        </div>
    );
    }