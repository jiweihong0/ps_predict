// footer 
import React from 'react';
import './footer.css';
export default function Footer() {
    return (
        <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-logo">
                <img src="man.png" alt="圖"/>
            </div>
            <div className="footer-info">
                <p>&copy; 2023 專題</p>
                <p>地址：台北市大安區復興南路一段390號</p>
                <p>電話：02-1234-5678</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">首頁</a></li>
                    <li><a href="#">關於我們</a></li>
                    <li><a href="#">服務</a></li>
                    <li><a href="#">聯繫我們</a></li>
                </ul>
            </div>
        </div>

    </footer>
    
    )
}

