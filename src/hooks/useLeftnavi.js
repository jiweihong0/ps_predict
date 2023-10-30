import { useEffect, useState } from "react";

export default function useLeftnavi() {
    const [selectedCategories, setSelectedCategories] = useState([true, true, true, true]);
    const [selectedItem, setSelectedItem] = useState("復健動作");
    const [selectedItemdetails, setSelectedItemdetails] = useState("a");
    const [loading, setLoading] = useState(false);
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
    const [isimage, setUpload] = useState(null);

    // base64 to file
    const base64tofile = async (base64, filename) => {
        // Decode the Base64 string to binary data
        const binaryData = atob(base64);

        // Create an ArrayBuffer to store the binary data
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const view = new Uint8Array(arrayBuffer);

        // Populate the ArrayBuffer
        for (let i = 0; i < binaryData.length; i++) {
            view[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

        // Create a File from the Blob
        const file = new File([blob], filename);

        // You can now use the 'file' object as needed
        console.log('Converted file:', file);

        // Convert the file to an image
       
        setUpload(URL.createObjectURL(file));
    }


   
    const getItemdetails = async(name) => {
       
        try{
            const url = `http://192.168.1.110:3000/api/getSportData?sport_name=${name}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                setSelectedItemdetails(responseData);
                base64tofile(responseData.image, "sport.jpg");
              
            }
        }
        catch(error){
            console.error("上傳錯誤:", error);
            
        }
    }
    const handleItemClick = async(item) => {
        setSelectedItem(item);
        await getItemdetails(item);
    };
   

    const startre = async(name) => {
        setLoading(true);
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
                // delay 15s
                setTimeout(() => {
                    setLoading(false);
                }, 18000);
                return responseData;
            } else {
                console.log("上傳失敗。");
                setLoading(false);
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
        setLoading(true);
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
                 // delay 15s
                 setTimeout(() => {
                    setLoading(false);
                }, 18000);
                setLoading(false);
            }
        }
        catch(error){
            console.error("上傳錯誤:", error);
            setLoading(false);
        }
    }
    

    useEffect(() => {
        startdefault();
    }
    , []);



    return {loading,isimage ,selectedItemdetails,startdefine,sport,startdefault,startre,selectedCategories, selectedItem,handleSelect, handleItemClick, rehabCategories };
}