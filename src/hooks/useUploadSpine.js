import { useState } from "react";

export default function useUpload() {
    const [isupload, setUpload] = useState(false);

    const startDetection = (selectedFile, callback) => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload = () => {
                const arrayBuffer = reader.result;
                setUpload(true);
                callback({user_name:"123",f_image:arrayBuffer}); // 調用回調函數並傳遞結果
            }
        } else {
            console.log("請選擇一個文件再開始檢測。");
        }
    }

    const upload = async (data) => {
        startDetection(data, async (result) => {
            console.log(result);
            try {
                // 更換api
                const response = await fetch("http://localhost:8500/authenticate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                
                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData);
                    setUpload(false);
                } else {
                    console.log("上傳失敗。");
                    setUpload(false);
                }
            } catch (error) {
                console.error("上傳錯誤:", error);
                setUpload(false);
            }
        });
    };

    return { upload, isupload };
}
