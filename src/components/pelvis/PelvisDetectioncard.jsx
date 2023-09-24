import React, { useState } from "react";
import './pelvisdetectioncard.css';
import pelvis from '../../assets/pelvis.png';
import useUpload from "../../hooks/useUpload";

export default function pelvisdetectioncard() {
   
    const [selectedFile, setSelectedFile] = useState(null);
    const { upload, isupload } = useUpload(); // 調用 useLogin 自訂 Hook 並解構返回值

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
                        <h2>請放入與圖片相符姿勢的照片</h2>
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
