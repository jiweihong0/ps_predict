import React from "react";
import Header from "../components/header/Header";
import PelvisDetectioncard from "../components/pelvis/PelvisDetectioncard";
import { Navigate } from "react-router-dom";
import usecheckUserPermissions from "../hooks/usecheckUserPermissions";




function AdminPage() {
    const { hasPermission } = usecheckUserPermissions();

    return (
        <>
            {
                hasPermission ?
                    <div style={{ backgroundColor: "#FFFBEB", width: "100%", height: "100vh" }}>
                        <Header />
                        <p>你好</p>
                    </div>
                    : <Navigate to="/login" />
            }

        </>
    );
}

export default AdminPage;