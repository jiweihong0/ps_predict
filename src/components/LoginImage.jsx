import React from 'react'
import './LoginImage.css'
import Vector from '../assets/Vector.png'
import VectorTop from '../assets/Vector_top.png'
import Xray from '../assets/Xray.png'
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';
const LoginImage = () => {
  return (
    <div className="frame-6" >
      <div className="loginimage" >
        <img src={VectorTop} className='imgVector' />
        <div className="group-1-1">
          <div className='psword'>
            <img src={Xray} alt="hi" />
            <p className="text-2">
              PS症狀分析
            </p>
          </div>
          
          <p className="text-3">FOR YOUR HEALTH</p>
          
        </div>
        <div className='bone'>
         <Lottie animationData={animationData}/>
        </div>
        
        <p className="text-1">嘗試
        <br/>不一樣的健檢</p>
        
        <img src={Vector} className='imgVectorBottom'/>
      </div>
    </div>
  )
}

export default LoginImage

