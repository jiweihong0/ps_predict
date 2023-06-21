import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://0.0.0.0:5111');

const App = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const initStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(stream);
    }
    initStream();
  }, []);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleStopStream = () => {
    stream.getTracks().forEach(track => track.stop());
    setStream(null);
  }

  const handleStartStream = () => {
    
    const videoTrack = stream.getVideoTracks()[0];
    const audioTrack = stream.getAudioTracks()[0];

    socket.emit('start_stream', { audio: true, video: true });



    videoTrack.addEventListener('ended', () => {
      socket.emit('stop_stream', { track: 'video' });
    });

    audioTrack.addEventListener('ended', () => {
      socket.emit('stop_stream', { track: 'audio' });
    });

    videoTrack.addEventListener('dataavailable', (event) => {
      socket.emit('video_stream', event.data);
      console.log(event.data);
    });

    audioTrack.addEventListener('dataavailable', (event) => {
      socket.emit('audio_stream', event.data);
    });
  }

  return (
    <div>
      <video ref={videoRef} autoPlay={true} muted={true} />
      {stream ? <button onClick={handleStopStream}>Stop Stream</button> : <button onClick={handleStartStream}>Start Stream</button>}
    </div>
  );
}

export default App;



