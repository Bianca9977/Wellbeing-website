import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/dayboost.scss';

export default function DayBoost() {
    let params = useParams();
    const time = params.time;

    return (
        <div className="dayboost-container">
            <div className='bg-container'></div>
            <div className='container'>
                {time}
          </div>
        </div>
      );
}