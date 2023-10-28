import React, { useState } from 'react';
import './leftnavi.css';
import { Navigate } from 'react-router-dom';


export default function LeftNavi(props) {

    return (
        <div className="leftnavi">
            <h1 className='leftnavi_title'>功能</h1>
        
                <div className='leftnavidropbox'>
                    <div className='leftnavi_title_next' onClick={()=>props.handleonClick(true)}>
                        使用者紀錄
                    </div>
                    <div className='leftnavi_title_next'onClick={()=>props.handleonClick(false)}>
                        新增動作
                    </div>
                </div>
          
        </div>
    );
}
