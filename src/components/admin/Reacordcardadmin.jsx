import React, { useEffect } from "react";
import './recordcard.css';
import right from '../../assets/right.png';





export default function Recordcardadmin(props) {
    return (
        <>
            <div className="recordcardadmin" onClick={() => props.handleFetch(props.item)}>
                <div>
                    <div className="recordcard__title" >
                        <h1>姓名:{props.item}</h1>
                    </div>
                </div>
                <div>
                    <img className="right" src={right} alt="" />
                </div>
            </div>
          

        </>)

}