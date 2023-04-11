import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/reflection.scss';

export default function Reflection() {
    let params = useParams();
    const mood = params.mood;

    return (
        <div className="reflection-container">
            <div className='bg-container'></div>
            <div className='container'>
            
          </div>
        </div>
      );
}