import React, { useState } from 'react';
import './LoginInput.css';
import man from '../../assets/man.png';
const LoginInput = (props) => {
    const data = props;
    return (
        <div className="frame-5">
            <div className="frame-title">
                <img src={man} className='imgman' alt="man" />
                <p className="title-word">登入</p>
            </div>
            <div className="email-frame">
                <p className="text-5">電子郵件</p>
                <input type='email' className="rectangle-2-9" value={data.email[0]} onChange={data.email[1]} />
            </div>
            <div className="password-frame" >
                <p className="text-4">密碼</p>
                <input type='password' className="rectangle-1-7" value={data.Password[0]} onChange={data.Password[1]} />
            </div>
            <button className="button-login" onClick={data.handleLogin}>登入</button>
            <img src="" alt="" />
        </div>
    );
}

export default LoginInput;
