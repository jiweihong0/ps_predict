import React from 'react'
import './SigninInput.css'
import man from '../../assets/man.png'
const SigninInput = () => {
    return (
        <div className="frame-5">
            <div className="frame-title">
                <img src={man} className='imgman'/>
                <p className="title-word">註冊</p>
            </div>
            <div className="email-frame">
                <p className="s-text-5">名稱</p>
                <input type='email' className="s-rectangle-2-9" />
            </div>
            <div className="email-frame">
                <p className="s-text-5">電子郵件</p>
                <input type='email' className="s-rectangle-2-9" />
            </div>
            <div className="email-frame" >
                <p className="s-text-4">密碼</p>
                <input type='password' className="s-rectangle-1-7" />
            </div>
            <div className="password-frame-signin" >
                <p className="s-text-4">確認密碼</p>
                <input type='password' className="s-rectangle-1-7" />
            </div>
            <button className="button-login">註冊</button>
            <img src="" />
        </div>
    )
}

export default SigninInput
