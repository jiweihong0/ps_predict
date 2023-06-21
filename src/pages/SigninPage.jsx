import React from "react";
import SigninInput from "../components/SigninInput";
import SigninImage from "../components/SigninImage";
const SigninPage = () => {
    return (
        <div className="h-screen bg-[#ECFEFC] flex w-full flex-wrap ">
            <div className="flex-initial w-2/5">
                {/* <CardLeft /> */}
                <SigninImage/> 
            </div>
            <div className="flex-inital w-3/5 flex flex-col justify-center items-center">
                <SigninInput />
            </div>
        </div>
    );
}

export default SigninPage;