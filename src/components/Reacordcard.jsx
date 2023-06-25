import React,{useState} from "react";
import './recordcard.css';
import right from '../assets/right.png';
import correct from '../assets/correct.png';
import Recorddetail from "./Recorddetail";

export default function Recordcard() {
    const [toggle, settoggle] = useState(false);
    
    const handleimgclick = () => {
        console.log("click");
    }
    const showdetail = () => {
       settoggle(!toggle);
    }
    return (
        <>
        {toggle ? (
            <Recorddetail detailstate={showdetail}/>
            ) :(
                <div className="recordcard" onClick={showdetail}>
                    <div>
                        <div className="recordcard__title">
                            <h1>檢測結果：正常</h1>
                            <img src={correct} alt="" />
                        </div>
                        <div className="recordcard__content">
                            <h2>日期：2023/05/05 23:00</h2>
                        </div>
                    </div>
                    <div>
                        <img className = "right" src={right} alt="" onClick={handleimgclick} />
                    </div>
                </div>
            )}
        </>)
        
}