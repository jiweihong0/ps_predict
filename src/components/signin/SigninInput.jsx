import React from 'react'
import './SigninInput.css'
import man from '../../assets/man.png'
import { useNavigate } from 'react-router-dom';
const SigninInput = (props) => {
    const data = props;
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    console.log(data.name[0]);
    return (
        <div className="frame-5">
            <div className="frame-title">
                <img src={man} className='imgman'/>
                <p className="title-word">註冊</p>
            </div>
            <div className="email-frame">
                <p className="s-text-5">名稱</p>
                <input type='email' className="s-rectangle-2-9" value={data.name[0]} onChange={data.name[1]}/>
            </div>
            <div className="email-frame">
                <p className="s-text-5">電子郵件</p>
                <input type='email' className="s-rectangle-2-9" value={data.email[0]} onChange={data.email[1]}/>
            </div>
            <div className="email-frame" >
                <p className="s-text-4">密碼</p>
                <input type='password' className="s-rectangle-1-7" value={data.Password[0]} onChange={data.Password[1]} />
            </div>
            <div className="password-frame-signin" >
                <p className="s-text-4">確認密碼</p>
                <input type='password' className="s-rectangle-1-7" />
            </div>
            <button className="button-login" onClick={data.handleSignin}>註冊</button>
            <div style={{marginTop:"15px",fontSize:"20px"}}>
                <p>已經有帳號了?  <button onClick={handleLogin} style={{opacity:"80%"}}>登入</button></p>
            </div>
            
        </div>
    )
}

export default SigninInput
