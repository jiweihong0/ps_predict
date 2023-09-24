import React from "react";
import './spinedetectioncard.css';
import spine from '../../assets/spine.png';
import useUploadSpine from "../../hooks/useUploadSpine";
import { useState } from "react";

export default function SpineDetectioncard() {
    const [selectedFile, setSelectedFile] = useState(null);
    const { upload, isupload } = useUploadSpine(); // 調用 useLogin 自訂 Hook 並解構返回值

    const [toggle, settoggle] = useState(false);

    const handleFileChange = (e) => {
        // 使用事件處理程序來捕獲所選文件
        const file = e.target.files[0];
    
        setSelectedFile(file);
    };

    
    const handleDetection = (e) => {
        e.preventDefault();
        const file = selectedFile;
        upload(file); // 調用 login 函數    
    }

    const handleCamera = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            settoggle({ photoURL: e.target.result });
            setSelectedFile(file);
          };
          reader.readAsDataURL(file);
    }
    }
   


    return (
        <div className="spinedetectioncard">
            <div className="spinedetectioncard__content__area">
                <div className="spinedetectioncard__picture">
                    
                    <input type="file" accept="image/*" capture="camera" onChange={handleCamera} />
                    {
                        toggle && <img src={toggle.photoURL} alt="" />
                        
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
