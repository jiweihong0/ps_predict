import React from "react";
import LoginInput from "../components/login/LoginInput";
import LoginImage from "../components/login/LoginImage";
import useLogin from "../hooks/useLogin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const LogininPage = () => {
    const navigate = useNavigate();
    // const { isLogin , isToken} = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const { login, isLogin } = useLogin(); // 調用 useLogin 自訂 Hook 並解構返回值

    const handleLogin = () => {
        const credentials = { username: email, password: password };
        login(credentials); // 調用 login 函數
    }
   
    return (
        <>
            {isLogin ? navigate('/'):
                <div className="h-screen bg-[#FFE7CC]/[.2] flex w-full flex-wrap ">
                    <div className="flex-initial w-2/5">

                        {/* <CardLeft /> */}
                        <LoginImage />
                    </div>
                    <div className="flex-inital w-3/5 flex flex-col justify-center items-center">
                        <LoginInput email={[email, handleEmail]} handleLogin={handleLogin} Password={[password, handlePassword]} />
                    </div>
                </div>}
        </>
    );
}

export default LogininPage;