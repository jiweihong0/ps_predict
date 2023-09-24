import React from "react";
import './pelvisdetectioncard.css';
import pelvis from '../../assets/pelvis.png';

export default function pelvisdetectioncard() {

    return (
        <div className="pelvisdetectioncard">
            <div className="pelvisdetectioncard__content__area">
                <div className="pelvisdetectioncard__picture">
                    <img src={pelvis} alt="" />
                </div>
                <div>
                    <div className="pelvisdetectioncard__content">
                        <h2>說明：</h2>
                        <h2>1.確定位置後背對鏡頭</h2>
                        <h2>2.身體向前微彎</h2> 
                        <h2>3.感受脊椎微微隆起即可</h2>
                        <h2>4.等待檢測結束</h2>
                        <h2>5.結束時畫面會呈現</h2>
                        <h2>6.詳細資料與建議請至紀錄查詢</h2>
                        <button>開始</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
