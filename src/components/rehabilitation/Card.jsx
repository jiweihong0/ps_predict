
import React, { useEffect, useState } from "react";
import './Card.css';
import image from '../../assets/image.png';
import correct from '../../assets/correct.png';
import useLeftnavi from "../../hooks/useLeftnavi";
import useRecorddetail from "../../hooks/useRecorddetail";

export default function Card(props) {
    const { name, selectedItemdetails, isimage } = props;
    const { startre, startdefine, loading } = useLeftnavi();


    const imageMap = {
        "復健動作": image,
        "深蹲": image,
    };

    const img = imageMap[name] || image;

    const handleclick = async (name) => {
        const img = await imageMap[name] ? startre(name) : startdefine(selectedItemdetails.sport_number);

    }
    console.log(selectedItemdetails);

    return (

        <>
            {imageMap[name] ?
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
                    <div>

                        <button className="cardbutton" onClick={() => handleclick(name)}>開始復健</button>
                        {
                            loading &&
                            <span>
                                加載中<span className="loader"></span>
                            </span>
                        }
                    </div>

                </div> :
                <div className="cardarea">
                    <p className="title">{selectedItemdetails.sport_name}</p>
                    <div className="carddetailarea">
                        <div className="carddetail">
                            <h2 className="cardh2">說明：</h2>
                            <ol className="cardol">
                                <li>1.站在畫面中央</li>
                                <li>2.請保持照片中的復健動作</li>
                                <li>3.直到復健結束</li>
                            </ol>
                            <h2 className="cardh2">醫生建議：</h2>
                            <p className="cardol">{selectedItemdetails.comments}</p>
                        </div>
                        <img src={isimage} alt="Image" style={{ minHeight: "450px" }} />
                    </div>
                    <div>

                        <button className="cardbutton" onClick={() => handleclick(name)}>開始復健</button>
                        {
                            loading &&
                            <span>
                                加載中<span className="loader"></span>
                            </span>
                        }
                    </div>

                </div>}

        </>
    );
}
