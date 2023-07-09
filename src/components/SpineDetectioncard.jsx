import React from "react";
import './spinedetectioncard.css';
import spine from '../assets/spine.png';

export default function SpineDetectioncard() {

    return (
        <div className="spinedetectioncard">
            <div className="spinedetectioncard__content__area">
                <div className="spinedetectioncard__picture">
                    <img src={spine} alt="" />
                </div>
                <div>
                    <div className="spinedetectioncard__content">
                        <h2>說明：</h2>
                        <h2>1.測身站在畫面中央</h2>
                        <h2>2.保持平常習慣的姿勢</h2>
                        <h2>3.盡量不讓手臂擋到腰部及臀部</h2>
                        <h2>4.等待檢測結束</h2>
                        <h2>5.結束時畫面會呈現骨盆狀態</h2>
                        <h2>6.詳細資料與建議請至紀錄查詢</h2>
                        <button>開始</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
