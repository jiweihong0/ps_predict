import { useState, useEffect } from "react";

export default function useRecordListAdmin() {
    const json =
    {
        "message": "成功取得使用者資料夾列表",
        "userFolders": [
          "admin",
          "user"
        ]
      }
      const json2 =
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
    const fetachRecord = async (data) => {
       
        try {
            const url = `http://192.168.1.110:3000/api/getUser`;
            const response = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const responseData = await response.json();
                setdata(responseData);
            } else {
                console.log("上傳失敗。");
                setRecord(false);
            }
        } catch (error) {
            console.error("上傳錯誤:", error);
            setRecord(false);

        }

    };
    const [isdata2, setdata2] = useState(json2);

    const [isRecord2, setRecord2] = useState(true);
    const fetachRecord2 = async (namea) => {
        try {
            const url = `http://192.168.1.110:3000/api/getUserImages/${namea}`;

            const response = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
               
            });
            if (response.ok) {
                const responseData = await response.json();
                setdata2(responseData);
                localStorage.setItem('imgname', namea);
                return responseData;
            } else {
                console.log("上傳失敗。");
                setRecord2(false);
            }
        } catch (error) {
            console.error("上傳錯誤:", error);
            setRecord2(false);

        }

    };


    useEffect(() => {
        
        fetachRecord();
    }, []);


    return { fetachRecord, fetachRecord2,isRecord, isdata ,isRecord2, isdata2};
}