import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './imagecropper.css';

const ImageCropper = (props) => {
 console.log(props);
const {src,cropper, handleFileChanges, handleCrop, croppedImage} = props;
  return (
    <div className='imgcrop_frame'>
      
      {src && (
        <div className='croppera'>
          <Cropper
            ref={cropper}
            src={src}
            zoomTo={0.5}
            initialAspectRatio={1}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
            style={{
              width: '600px',
              height: '600px',
            }}
          />
          <button onClick={handleCrop} className='uploadStyle' >裁切圖片</button>
        </div>
      )}
      {croppedImage && (
        <div className='cropperimg'>
          <img src={croppedImage} alt="Cropped" className='croppedImage'  />
          <h2>確認上傳圖片</h2>
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
