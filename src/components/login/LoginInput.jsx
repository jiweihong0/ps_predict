import React, { useState } from 'react';
import './LoginInput.css';
import man from '../../assets/man.png';
import { useNavigate } from 'react-router-dom';
const LoginInput = (props) => {
    const data = props;
    const navigate = useNavigate();
    const handleSignin = (e) => {
        e.preventDefault();
        navigate('/signin');
    }
    return (
        <div className="frame-5">
            <div className="frame-title">
                <img src={man} className='imgman' alt="man" />
                <p className="title-word">登入</p>
               
            </div>
            <div className="email-frame">
                <p className="text-5">帳號</p>
                <input type='email' className="rectangle-2-9" value={data.email[0]} onChange={data.email[1]} />
            </div>
            <div className="password-frame" >
                <p className="text-4">密碼</p>
                <input type='password' className="rectangle-1-7" value={data.Password[0]} onChange={data.Password[1]} />
            </div>
            <button className="button-login" onClick={data.handleLogin}>登入</button>
            <div style={{marginTop:"15px",fontSize:"20px"}}>
                <p>還沒有帳號?  <button onClick={handleSignin} style={{opacity:"80%"}}>註冊</button></p>
            </div>
        </div>
    );
}

export default LoginInput;
