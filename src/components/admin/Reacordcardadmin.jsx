import React, { useEffect } from "react";
import './recordcard.css';
import right from '../../assets/right.png';
import Recordcardlist from "../record/Recordcardlist";
import useRecordListAdmin from "../../hooks/useRecordListAdmin";





export default function Recordcardadmin(props) {
    return (
        <>
            <div className="recordcard" onClick={() => props.handleFetch(props.item)}>
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