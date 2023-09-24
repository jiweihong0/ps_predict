import { useState } from "react";

export default function useRecordlist() {
    const json = 
        {
            message: "成功取得使用者圖片列表",
            userRelatedDatetime: [
              "20230922_1532",
              "20230922_1539",
              "20230922_1553",
              "20230922_1607",
              "20230922_1613",
              "20230922_1614",
              "20230922_1618",
              "20230922_1619",
              "20230922_1620",
              "20230922_1621",
              "20230922_1621",
              "20230924_1619",
              "20230924_1627",
              "20230924_1631",
              "20230924_1632",
              "20230924_1639",
              "20230924_1648",
              "20230924_1653",
              "20230924_1716",
              "20230924_1719",
              "20230924_1721",
              "20230924_1722",
              "20230924_1725",
              "20230924_1726",
              "20230924_1727",
              "20230924_1729",
              "20230924_1733",
              "20230924_1738",
              "20230924_1741",
            ]
          }
    
    const [isdata, setdata] = useState(json);

    const [isRecord, setRecord] = useState(true);
    const fetachRecord = async (data) => {
        try {
            const response = await fetch("http://localhost:8500/recordlist", {
                method: "POST",
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

    };

            
    return { fetachRecord, isRecord, isdata };
}