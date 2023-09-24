import React,{useState} from "react";
import './recordcard.css';
import right from '../../assets/right.png';
import correct from '../../assets/correct.png';
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
    return (
        <>
        
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
                        <img className = "right" src={right} alt="" />
                    </div>
                </div>
                {toggle ? (
            <Recorddetail detailstate={showdetail} consistdetail = {consistdetail} data={props.data}/>
            ) :(console.log("no"))}
        </>)
        
}