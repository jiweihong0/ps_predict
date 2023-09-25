import React, { useState, useRef } from "react";
import './spinedetectioncard.css';
import spine from '../../assets/spine.png';
import useUploadSpine from "../../hooks/useUploadSpine";
import Webcam from 'react-webcam'; // 添加 Webcam 导入

export default function SpineDetectioncard() {
    const [selectedFile, setSelectedFile] = useState(null);
    const { isupload, filetobase64, upload } = useUploadSpine();

    const [toggle, settoggle] = useState(false);
    const webcamRef = useRef(null); // 添加 webcamRef

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const filechangetype = await filetobase64(file);
        setSelectedFile(filechangetype);
    };

    const handleDetection = (e) => {
        e.preventDefault();
        const file = selectedFile;
        upload(file);
    }

    const handlescreenshot = (e) => {
        e.preventDefault();
        const screenshot = webcamRef.current.getScreenshot();
        if (screenshot) {
            settoggle({ photoURL: screenshot });
            const fileselect = screenshot.split(',')[1]
            setSelectedFile(fileselect);

        }
    }

    const screenshotrelode = (e) => {
        e.preventDefault();
        settoggle(false);
    }

    return (
        <div className="spinedetectioncard">
            <div className="spinedetectioncard__content__area">
                <div className="photocard_area">

                    <div className="spinedetectioncard__picture">
                        {/* 添加 Webcam 组件 */}
                        {
                            !toggle && <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={{ facingMode: "user" }}
                            />
                        }
                        {
                            toggle && <img src={toggle.photoURL} alt="" className="spine_img" />
                        }

                    </div>
                    <div className="buttom_area">
                        <button onClick={screenshotrelode} className="spine_buttom">重新拍攝</button>

                        <button onClick={handlescreenshot} className="spine_buttom">拍攝</button>
                    </div>

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
                        <input type="file" name="" id="" onChange={handleFileChange} />
                        {
                            isupload &&
                            <>
                                加載中<span className="loader"></span>
                            </>
                        }
                        <button onClick={handleDetection}>開始</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
