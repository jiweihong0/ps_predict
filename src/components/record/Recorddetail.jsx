import React from "react";
import './recorddetail.css';
import redress from '../../assets/redress.png';
// import useRecorddetail from "../../hooks/useRecorddetail";
// import { useState, useEffect } from "react";

export default function Recorddetail(props) {
    const detailstate = props.detailstate;
    const consistdetail = props.consistdetail;
    
    // useEffect(() => {
    //     const {fetchRecord, isRecord, isdata, base64tofile } = useRecorddetail();

    //     const fetchdata = fetchRecord(props.data.date);
    //     console.log(fetchdata);
    //     console.log(isdata);
    //     console.log(isRecord);
    //     console.log(base64tofile);
    // }, []);




    
    return (
        <div className="modal-overlay" onClick={detailstate} >
            <div className="recorddetail"onClick={consistdetail} >
                <div className="recorddetail__content__area__top">
                    <div className="recorddetail__button">
                        <button onClick={detailstate}>{"<"} 返回</button>
                    </div>
                    <div className="recorddetail__title">
                        <h1>詳細記錄</h1>
                    </div>
                </div>
                <div className="recorddetail__content__area">
                    <div className="recorddetail__content">
                        <h2>骨盆狀態：骨盆前傾</h2>
                        <h2>傾斜角度：13度</h2>
                        <h2>檢測結果：需校正</h2>
                        <h2>建議復健動作：</h2>
                        <h2>橋式、深蹲、平板撐、下犬式、屈膝伸展</h2>
                        <h2>檢查日期：{props.data.date}</h2>
                    </div>
                    <div className="recorddetail__line_group">
                        <div className="recorddetail__line">-</div>
                        <div className="recorddetail__line"/>
                        <div className="recorddetail__line"/>
                    </div>
                    <div>
                        <img src={redress} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
}
