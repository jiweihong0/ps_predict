
import React, { useState } from "react";
import './Card.css';
import right from '../../assets/right.png';
import correct from '../../assets/correct.png';
import useLeftnavi from "../../hooks/useLeftnavi";

export default function Card(props) {
    const { name } = props;
    const{startre} = useLeftnavi();

    const imageMap = {
        "復健動作": right, 
        "深蹲": correct,
        "屈膝伸展": correct,
        "下犬式": correct,
 
    };

    const img = imageMap[name] || right; 

    return (
        <div className="cardarea">
            <p className="title">{name}</p>
            <div className="carddetailarea">
                <div className="carddetail">
                    <h2 className="cardh2">說明：</h2>
                    <ol className="cardol">
                        <li>1.站在畫面中央</li>
                        <li>2.請保持照片中的復健動作</li>
                        <li>3.直到復健結束</li>
                    </ol>
                    <h2 className="cardh2">醫生建議：</h2>
                    <p className="cardol">每天復健一次，每次復健時間為10分鐘</p>
                    
                </div>
                <img src={img} alt="Image" />
            </div>
            <button className="cardbutton" onClick={()=>startre(name)}>開始復健</button>
        </div>
    );
}
