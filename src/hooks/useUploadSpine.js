import { useState } from "react";

export default function useUploadSpine() {
    const [isupload, setUpload] = useState(false);
    
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
        const filetostringa = file.split(',')[1];
        const filetostring = filetostringa.toString();
        const namea = localStorage.getItem('name');
        const response = await fetch('http://192.168.1.110:3000/api/sdimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ user_name:namea,s_Image: filetostring })
        });
        const data = await response.json();

    }

    return { isupload, filetobase64, upload };


}
