import { useEffect, useState } from "react";

export default function useLeftnavi() {
    const [selectedCategories, setSelectedCategories] = useState([true, true, true, true]);
    const [selectedItem, setSelectedItem] = useState("復健動作");
    const rehabCategories = [
        { title: '預設復健段動作', items: ['深蹲'] },
        { title: '醫師建議動作', items: ["屈膝抱踝"] },

    ];
    const [sport, setSport] = useState(rehabCategories);
    const handleSelect = (index) => {
        const newSelectedCategories = [...selectedCategories];
        newSelectedCategories[index] = !newSelectedCategories[index];
        setSelectedCategories(newSelectedCategories);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

   

    const startre = async(name) => {
        const textconvert = {
            "復健動作": "sport1.txt",
            "深蹲":"sport1.txt",
            "屈膝伸展": "sport2",
            "下犬式": "sport3",
     
        };
        const fetchname = textconvert[name];
        try{
            const url = `http://192.168.1.110:3000/api/getDecidedSport/${fetchname}`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                return responseData;
            } else {
                console.log("上傳失敗。");
            }
            
        }
        catch(error){
            console.error("上傳錯誤:", error);
        }
    }
    const startdefault = async() => {
        try{
            const url = `http://192.168.1.110:3000/api/getDefineList/`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (response.ok) {
                const responseData = await response.json();
                // set rehabCategories titile = 醫生建議動作 items = responseData
                const newrehabCategories = [...rehabCategories];
                newrehabCategories[1].items = responseData.sport_files;
                setSport(newrehabCategories);

                // console.log(responseData);
            } else {
                console.log("上傳失敗。");
            }
        }
        catch(error){
            console.error("上傳錯誤:", error);
        }
    }
    
    const startdefine = async(name) => {
        try{
            const url = `http://192.168.1.110:3000/api/getDefineSport/${name}`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }
        }
        catch(error){
            console.error("上傳錯誤:", error);
        }
    }

    useEffect(() => {
        startdefault();
    }
    , []);



    return { startdefine,sport,startdefault,startre,selectedCategories, selectedItem,handleSelect, handleItemClick, rehabCategories };
}