import React from "react";
import './recorddetail.css';

export default function Recorddetail(props) {
    const detailstate = props.detailstate;
    return (
        <div className="modal-overlay">
            <div className="recorddetail">
                <div className="recorddetail__title">
                    <h1>檢測結果：正常</h1>
                </div>
                <div className="recorddetail__content">
                    <h2>日期：2023/05/05 23:00</h2>
                    <h2>脊椎偵測結果：正常</h2>
                    <h2>骨盆偵測結果：正常</h2>
                </div>
                <div className="recorddetail__button">
                    <button onClick={detailstate}>返回</button>
                </div>

            </div>

        </div>
    );
}
