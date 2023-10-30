import { useState } from "react";

export default function useCustompose() {
    const [isupload, setUpload] = useState(false);
    const [loading, setLoading] = useState(false);
    const [namea, setName] = useState('輸入名稱');
    const [comments, setComments] = useState('說明');
    
    const filetobase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1], setUpload(false));
            reader.onerror = error => reject(error);
        });
    }


    const upload = async (file) => {
        // file to string
        setLoading(true);
        const filetostringa = file.split(',')[1];
        const filetostring = filetostringa.toString();
        
        const response = await fetch('http://192.168.1.110:3000/api/updateSport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ sport_name:namea,s_Image: filetostring,comments:comments })
        });
        setLoading(false);
        const data = await response.json();
        alert(data.message);

    }

    return {setComments, setName,isupload, filetobase64, upload, setLoading, loading };


}
