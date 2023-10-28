import React, { useEffect, useState } from "react";
import Recordcardadmin from "./Reacordcardadmin";
import useRecordListAdmin from "../../hooks/useRecordListAdmin";
import Recordcardlist from "./Recordcardlist";



export default function RecordlistAdmin() {
    const { isdata, isdata2, fetachRecord2 } = useRecordListAdmin();
    const [open, setOpen] = useState(false);

    const handleFetch = async (id) => {
        const fetchedData = await fetachRecord2(id);
        setOpen(true);
    }

    const handleonClick = (a) => {
        setOpen(!open);
    }

    return (
        <>
            {
                open ? <button onClick={handleonClick} style={{display:"inline-flex",fontSize:"20px",fontWeight:"bold",whiteSpace:"nowrap"}}> {"<"}返回</button> : null
            }
            <div style={{ backgroundColor: "#FFFBEB", display: "flex", flexDirection: "row", alignItems: "center", height: "100%", width: "100%", overflow: "visible",  }}>

                {
                    open ? <Recordcardlist data={isdata2}  /> : // isdata.userFolders is an array, so we can use map() to iterate over its
                        isdata.userFolders.map((item, index) => {
                            return <Recordcardadmin key={index} item={item} handleFetch={handleFetch} />
                        })
                }
            </div>
        </>
    );
}