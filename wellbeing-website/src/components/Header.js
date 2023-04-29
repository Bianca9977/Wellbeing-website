import React from 'react';
import '../styles/common.scss';
import { useNavigate } from "react-router-dom";

export default function Header() {

    let navigate = useNavigate();

    function goToHomepage() {
        navigate('/');
    }

    return (
      <div  className="header">
        <button className='home-button' onClick={goToHomepage}>
            <span>Lull</span>
        </button>  
      </div>
    );
}