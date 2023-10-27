import React from "react";
import LoginInput from "../components/login/LoginInput";
import LoginImage from "../components/login/LoginImage";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import usecheckUserPermissions from "../hooks/usecheckUserPermissions";
const LogininPage = () => {
    const navigate = useNavigate();
    // const { isLogin , isToken} = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('請輸入帳號密碼');
            return;
        }

        // read user data from localstorage and find user data
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const findUser = user.find((item) => item.email === email && item.password === password);
        if (!findUser) {
            alert('帳號密碼錯誤');
            return;
        }
        // use findUser to set name in localstorage
        localStorage.setItem('name', findUser.name);
        alert('登入成功');
        if (findUser.email === 'admin') {
            localStorage.setItem('isAdmin', true);
        }
        setIsLogin(true);
        // set email to localstorage
        localStorage.setItem('email', email);
        setTimeout(() => {
            navigate('/');
        }, 1000);
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