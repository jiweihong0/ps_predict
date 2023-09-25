import { useState } from "react";

export default function useRecorddetail() {
    // base64 to file
    const base64tofile = (base64, filename) => {
        var arr = base64.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bytes = atob(arr[1]);
        var n = bytes.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bytes.charCodeAt(n);
        }
        // return new File([u8arr], filename, { type: mime });
        return new Blob([u8arr], { type: mime });
    }

    const json =
    {
        message: "成功取得使用者圖片列表",
        userRelatedDatetime: [
            {
                "date": "20230925_1746",
                "status": 1
            },
            {
                "date": "20230925_1747",
                "status": 2
            }
        ]
    }

    const [isdata, setdata] = useState(json);

    const [isRecord, setRecord] = useState(true);
    const fetchRecord = async (data) => {
        try {
            const url = `http://localhost:3000/api/getDateImages/${"any5"}`;
            const response = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                setdata(responseData);
            } else {
                console.log("上傳失敗。");
                setRecord(false);
            }
        } catch (error) {
            console.error("上傳錯誤:", error);
            setRecord(false);

        }

    }

    return { fetchRecord, isRecord, isdata, base64tofile };
}