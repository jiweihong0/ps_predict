import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Xray from '../../assets/Xray.png';
import man from '../../assets/man.png';
import usecheckUserPermissions from '../../hooks/usecheckUserPermissions';

export default function Header() {
    const { currentUser, logout } = useAuth();
    const [name, setName] = useState(localStorage.getItem('name'));
    const navigate = useNavigate();
    const { hasPermission } = usecheckUserPermissions();
    const location = useLocation();

    // 使用状态变量来记录选中的菜单项
    const [activeLink, setActiveLink] = useState(location.pathname);

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
                <img src={Xray} alt="no image" />
                <Link className='header__logo__text' to="/">PS症狀分析</Link>
            </div>
            <div className="header__links">
                {currentUser ? (
                    <div className='link_all'>
                        <div className='header_links'>
                            <Link
                                className={`link ${activeLink === '/spine' ? 'active' : ''}`}
                                to="/spine"
                            >
                                骨盆偵測
                            </Link>
                            <Link
                                className={`link ${activeLink === '/pelvis' ? 'active' : ''}`}
                                to="/pelvis"
                            >
                                脊椎偵測
                            </Link>
                            <Link
                                className={`link ${activeLink === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                檢測紀錄
                            </Link>
                            <Link
                                className={`link ${activeLink === '/Rehabilitation' ? 'active' : ''}`}
                                to="/Rehabilitation"
                            >
                                復健動作
                            </Link>
                        </div>
                        <div className='userinfo' style={{marginLeft:"10px"}}>
                            {
                                hasPermission ? <Link  className={`link ${activeLink === '/admin' ? 'active' : ''}`} to="/admin" style={{padding:"10px"}} >管理</Link> : <></>
                            }
                            <img src={man} alt="no image" />
                            <div>{name}</div>
                            <button onClick={handleLogout}>登出</button>
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
