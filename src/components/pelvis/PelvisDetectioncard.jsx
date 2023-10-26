import React, { useState, useRef, useEffect } from "react";
import './pelvisdetectioncard.css';
import useUpload from "../../hooks/useUpload";
// navigation
import { useNavigate } from 'react-router-dom';
import useTimer from "../../hooks/useTimer";
import Camera from "./camera";
import camerapng from '../../assets/camera.png';
import pelvisyu from '../../assets/pelvisyu.jpeg';
import ImageCropper from "./ImageCropper";



export default function pelvisdetectioncard() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const { isupload, filetobase64, upload } = useUpload();
    const { countdown, isCountingDown, setIsCountingDown, resset } = useTimer();
    const [takeshot, settakeshot] = useState(false);

    const [src, setSrc] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const cropper = useRef();
    console.log(croppedImage);

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
        navigate('/');
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


    const countdownDisplay = isCountingDown ? (
        <div className="timer">剩餘時間: {countdown} 秒</div>
    ) : null;

    const handletakephoto = (e) => {
        e.preventDefault();
        settakeshot(!takeshot);

    }

    useEffect(() => {
        setSrc(pelvisyu);
    }, []);

    return (
        <div className="pelvisdetectioncard">
            <div className="pelvisdetectioncard__content__area">
                <div className="photocard_area">
                    {
                        <ImageCropper src={src} cropper={cropper} handleFileChanges={handleFileChanges} handleCrop={handleCrop} croppedImage={croppedImage} />
                    }
                    {
                        takeshot && <Camera handletakephoto={handletakephoto} webcamRef={webcamRef} toggle={toggle} countdownDisplay={countdownDisplay} handletime={handletime} screenshotrelode={screenshotrelode} />
                    }
                </div>
                <div>
                    <div className="pelvisdetectioncard__content">
                        <h2>說明：</h2>
                        <h2>1.確定位置後背對鏡頭</h2>
                        <h2>2.身體向前微彎</h2>
                        <h2>3.感受脊椎隆起即可</h2>
                        <h2>4.等待檢測結束</h2>
                        <h2>5.結束時畫面會呈現</h2>
                        <h2>6.詳細資料與建議請至紀錄查詢</h2>
                        <h2>請放入與圖片相符姿勢的照片</h2>
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
                        <button onClick={handleDetection}>開始</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
