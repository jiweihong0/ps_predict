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
        console.log(file);
        const response = await fetch('https://localhost:3000/api/upimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ username:"123",f_Image: file })
        });
        const data = await response.json();

    }

    return { isupload, filetobase64, upload };


}
