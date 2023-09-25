import { useState } from "react";

export default function useUpload() {
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
        const filetostring = file.toString();
        console.log(file);
        const response = await fetch('http://192.168.1.119:3000/api/upimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ username:"123",f_Image: filetostring })
        });
        const data = await response.json();
        console.log(data);

    }

    return { isupload, filetobase64, upload };


}
