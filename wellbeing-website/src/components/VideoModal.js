import React, { useState, useEffect, useRef } from 'react';
import '../styles/modal.scss';

export default function Modal(props) {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (videoRef.current && !videoRef.current.contains(event.target)) {
            props.onClickClose();
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [videoRef]);

  return (
    <div className="video-modal">
        <div className='video-container' ref={videoRef}>
            <div onClick={props.onClickClose} className='close-button'>&times;</div>
            <iframe width="1160" height="715" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        </div>
    </div>
  );
}