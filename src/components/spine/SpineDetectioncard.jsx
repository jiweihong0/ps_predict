import React, { useState, useRef, useEffect } from "react";
import './spinedetectioncard.css';
import useUploadSpine from "../../hooks/useUploadSpine";
import ImageCropper from "./ImageCropper";

import { useNavigate } from 'react-router-dom';
import useTimer from "../../hooks/useTimer";
import Camera from "./camera";
import camerapng from '../../assets/camera.png';
import spineyu from '../../assets/spineyu.jpeg';


export default function SpineDetectioncard() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const { isupload, filetobase64, upload, loading, setLoading } = useUploadSpine();
    const { countdown, isCountingDown, setIsCountingDown, resset } = useTimer();
    const [takeshot, settakeshot] = useState(false);

    const [src, setSrc] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const cropper = useRef();

    const handleFileChanges = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleCrop = () => {
        if (cropper.current && cropper.current.cropper) {
            const croppedCanvas = cropper.current.cropper.getCroppedCanvas();
            if (croppedCanvas) {
                const croppedImage = croppedCanvas.toDataURL();
                setCroppedImage(croppedImage);
            }
        }
    };

    const [toggle, settoggle] = useState(null);
    const webcamRef = useRef(null);

    const handletime = (e) => {
        e.preventDefault();
        setIsCountingDown(true);
        setTimeout(() => {
            takeScreenshot();
        }, 10000);
    }

    const handleDetection = (e) => {
        e.preventDefault();
        const file = croppedImage;
        upload(file);
    }

    const takeScreenshot = () => {
        const screenshot = webcamRef.current.getScreenshot();

        if (screenshot) {
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                // 圖像水平翻轉
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.setTransform(-1, 0, 0, 1, image.width, 0);
                ctx.drawImage(image, 0, 0, image.width, image.height);

                // 轉換為DataURL
                const flippedScreenshot = canvas.toDataURL("image/jpeg");

                settoggle({ photoURL: flippedScreenshot });
                const fileselect = flippedScreenshot.split(",")[1];
                setSelectedFile(fileselect);
                setSrc(flippedScreenshot);
            };

            image.src = screenshot;
        }
        setIsCountingDown(false); // 拍照停止
    };


    const screenshotrelode = (e) => {
        e.preventDefault();
        resset();
        settoggle(null);
        handletime();
    }
    useEffect(() => {
        setSrc(spineyu);
    }, []);



    const countdownDisplay = isCountingDown ? (
        <div className="timer">剩餘時間: {countdown} 秒</div>
    ) : null;

    const handletakephoto = (e) => {
        e.preventDefault();
        settakeshot(!takeshot);

    }


    return (
        <div className="spinedetectioncard">
            <div className="spinedetectioncard__content__area">

                <div className="photocard_area">
                    {
                        <ImageCropper src={src} cropper={cropper} handleFileChanges={handleFileChanges} handleCrop={handleCrop} croppedImage={croppedImage} />
                    }
                    {
                        takeshot && <Camera handletakephoto={handletakephoto} webcamRef={webcamRef} toggle={toggle} countdownDisplay={countdownDisplay} handletime={handletime} screenshotrelode={screenshotrelode} />
                    }
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

                        {
                            isupload &&
                            <>
                                加載中<span className="loader"></span>
                            </>
                        }
                        <div className="takeshot_buttonframe">
                            <button className="takeshot_frame" onClick={handletakephoto}>拍攝 <img src={camerapng} alt="" className="iconstyle" /></button>
                            <input id="upload" type="file" accept="image/*" onChange={handleFileChanges} />
                            <label type="button" htmlFor="upload" >
                                <div className="uploadStyle">

                                    選擇檔案
                                </div>
                            </label>
                            
                        </div>
                        <button onClick={handleDetection}>診斷</button>
                        {
                            loading &&
                            <>
                                加載中<span className="loader"></span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
