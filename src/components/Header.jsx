// create header compoent
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './header.css';
import man from '../assets/man.png';
import Xray from '../assets/Xray.png';

export default function Header() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.log('Failed to log out');
        }
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img  src={Xray} alt="no image" />
                <Link className='header__logo__text' to="/">PS症狀分析</Link>
            </div>
            <div className="header__links">  
                {currentUser ? (
                    <div className='link_all'>
                        <div className='header_links'>

                            <Link className='link' to="/spine">骨盆偵測</Link>
                            <Link className='link' to="/">檢測紀錄</Link>
                            <Link className='link' to="/Rehabilitation">復健動作</Link>
                            <Link to="/pelvis">脊椎偵測</Link>
                        </div>
                        <div className='userinfo'>
                            <img src={man} alt="no image" />
                            <button onClick={handleLogout}>王小明</button>
                        </div>
                    </div>

                ) : (
                    <div>
                        <Link to="/signin">註冊</Link>
                        <Link to="/login">登入</Link>
                    </div>
                )}
            </div>
        </header>
    );
}