import React, { useState } from "react";
import Header from "../components/header/Header";
import { Navigate } from "react-router-dom";
import usecheckUserPermissions from "../hooks/usecheckUserPermissions";
import LeftNavi from "../components/admin/LeftNavi";
import RecordlistAdmin from "../components/admin/RecordlistAdmin";
import SpineDetectioncard from "../components/custompose/SpineDetectioncard";




function AdminPage() {
    const [open, setOpen] = useState(false);
    const { hasPermission } = usecheckUserPermissions();

    const handleonClick = (a) => {
        setOpen(a);
    }

    return (
        <>
            {
                hasPermission ?
                    <>
                        <Header />
                        <div style={{ backgroundColor: "#FFFBEB", width: "100%", minHeight: "100vh",display:"flex" }}>
                            <LeftNavi handleonClick={handleonClick} />
                            {
                                open ? <RecordlistAdmin /> : <SpineDetectioncard />
                            }

                        </div>
                    </>

                    : <Navigate to="/login" />
            }

        </>
    );
}

export default AdminPage;