import { useState } from "react";

export default function useLeftnavi() {
    const [selectedCategories, setSelectedCategories] = useState([true, true, true, true]);
    const [selectedItem, setSelectedItem] = useState("復健動作");
    const handleSelect = (index) => {
        const newSelectedCategories = [...selectedCategories];
        newSelectedCategories[index] = !newSelectedCategories[index];
        setSelectedCategories(newSelectedCategories);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const rehabCategories = [
        { title: '預設復健段動作', items: ['深蹲', '屈膝伸展', '下犬式'] },
        { title: '醫師建議動作', items: ['橋式', '嬰兒式', '鳥狗式', '屈膝抱胸'] },

    ];

    const startre = (name) => {
        const textconvert = {
            "復健動作": "sport1.txt",
            "深蹲":"sport1.txt",
            "屈膝伸展": "sport2",
            "下犬式": "sport3",
     
        };
        const fetchname = textconvert[name];
        console.log(fetchname);
        try{
            const url = `http://192.168.1.110:3000/api/getDecidedSport/${fetchname}`;
            const response = fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const responseData = response.json();
                console.log(responseData);
            } else {
                console.log("上傳失敗。");
            }
            
        }
        catch(error){
            console.error("上傳錯誤:", error);
        }
    }


    return { startre,selectedCategories, selectedItem,handleSelect, handleItemClick, rehabCategories };
}