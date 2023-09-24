import React from "react";
import LoginInput from "../components/login/LoginInput";
import LoginImage from "../components/login/LoginImage";
const LogininPage = () => {
    return (
        <div className="h-screen bg-[#FFE7CC]/[.2] flex w-full flex-wrap ">
            <div className="flex-initial w-2/5">
                {/* <CardLeft /> */}
                <LoginImage/> 
            </div>
            <div className="flex-inital w-3/5 flex flex-col justify-center items-center">
                <LoginInput />
            </div>
        </div>
    );
}

export default LogininPage;