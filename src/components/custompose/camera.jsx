import React from "react";
import Webcam from 'react-webcam';
import './camera.css';
const Camera = (props) => {
    const data = props;

    return (
        <div className="modal-overlay">
            <div className="spinedetectioncard__picture">
                {
                    !data.toggle && <Webcam
                        audio={false}
                        ref={data.webcamRef}
                        screenshotFormat="image/*"
                        videoConstraints={{ facingMode: "user" }}
                    />
                }
                {
                    data.toggle && <img src={data.toggle.photoURL} alt="0" />
                }

            </div>
            <div className="buttom_area">

                {data.countdownDisplay} {/* 顯示倒數計時 */}
            </div>
            <div className="buttom_area">

                <button onClick={data.handletime} className="spine_buttom">拍攝</button>
                <button onClick={data.handletakephoto} className="spine_buttom">完成</button>
                <button onClick={data.screenshotrelode} className="spine_buttom">重新拍攝</button>

            </div>
        </div>
    );
}

export default Camera;