import React, { useState } from "react";
import './recordcard.css';
import right from '../../assets/right.png';
import correct from '../../assets/correct.png';
import danger from '../../assets/danger.png';
import warning from '../../assets/warning.png';
import Recorddetail from "./Recorddetail";


export default function Recordcard(props) {
    const [toggle, settoggle] = useState(false);
    const showdetail = (e) => {
        e.stopPropagation();
        settoggle(!toggle);
    }
    const consistdetail = (e) => {
        e.stopPropagation();
        settoggle(toggle);
    }
    
    const statusImage = () => {
        switch (props.item.status) {
            case "1":
                return correct;
            case "2":
                return warning;
            case "3":
                return correct;
            case "4":
                return warning;
            default:
                return correct; // 如果没有匹配的状态，返回默认图像
        }
    }
    const statusMessage = () => {
        switch (props.item.status) {
            case "1":
                return "脊椎正常";
            case "2":
                return "脊椎異常";
            case "3":
                return "骨盆正常";
            case "4":
                return "骨盆異常";
            default:
                return "correct"; // 如果没有匹配的状态，返回默认图像
        }
    }

    return (
        <>
            <div className="recordcard" onClick={showdetail}>
                <div>
                    <div className="recordcard__title">
                        <h1>檢測結果：{statusMessage()}</h1>
                        <img src={statusImage()} alt={`状态：${props.item.status}`} />
                    </div>
                    <div className="recordcard__content">
                        <h2>日期：{props.item.date}</h2>
                    </div>
                </div>
                <div>
                    <img className="right" src={right} alt="" />
                </div>
            </div>
            {toggle ? (
                <Recorddetail detailstate={showdetail} consistdetail={consistdetail} data={props.data} />
            ) : (console.log("no"))}
        </>)

}