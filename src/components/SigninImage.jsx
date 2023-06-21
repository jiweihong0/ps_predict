import React from 'react'
import './SigninImage.css'
import Vector from '../assets/Vector.png'
import VectorTop from '../assets/Vector_top.png'
import Xray from '../assets/Xray.png'
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';
const SigninImage = () => {
  return (
    <div className="frame-6-signin" >
      <div className="Signimage" >
        <img src={VectorTop} className='imgVector' />
        <div className="s-group-1-1">
          <div className='s-psword'>
            <img src={Xray} alt="hi" />
            <p className="s-text-2">
              PS症狀分析
            </p>
          </div>
          <p className="s-text-3">FOR YOUR HEALTH</p>
        </div>
        <div className='s-bone'>
          <Lottie animationData={animationData} />
        </div>
        <p className="s-text-1">嘗試
          <br />不一樣的健檢</p>
        <img src={Vector} className='imgVectorBottom' />
      </div>
    </div>
  )
}

export default SigninImage

