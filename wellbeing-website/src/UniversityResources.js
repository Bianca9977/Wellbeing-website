import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/universityresources.scss';

export default function UniversityResources() {
    let params = useParams();
    const mood = params.mood;

    return (
        <div className="university-container">
            <div className='bg-container'></div>
            <div className='container'>
            
          </div>
        </div>
      );
}