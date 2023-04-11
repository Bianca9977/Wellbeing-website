import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/peersupport.scss';

export default function PeerSupport() {
    let params = useParams();
    const mood = params.mood;

    return (
        <div className="peersupport-container">
            <div className='bg-container'></div>
            <div className='container'>
            
          </div>
        </div>
      );
}