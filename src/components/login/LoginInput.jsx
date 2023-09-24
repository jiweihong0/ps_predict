import React from 'react'
import './LoginInput.css'
import man from '../../assets/man.png'
const LoginInput = () => {
    return (
        <div className="frame-5">
            <div className="frame-title">
                <img src={man} className='imgman'/>
                <p className="title-word">登入</p>
            </div>
            <div className="email-frame">
                <p className="text-5">電子郵件</p>
                <input type='email' className="rectangle-2-9" />
            </div>
            <div className="password-frame" >
                <p className="text-4">密碼</p>
                <input type='password' className="rectangle-1-7" />
            </div>
            <button className="button-login">登入</button>
            <img src="" />
        </div>
    )
}

export default LoginInput
