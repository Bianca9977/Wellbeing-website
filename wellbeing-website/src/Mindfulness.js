import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/mindfulness.scss';
import './styles/common.scss';
import { useNavigate } from "react-router-dom";

export default function Mindfulness() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    const happyRecomm = [
        {

        }
    ]

    const sadRecomm = [
        {
            
        }
    ]

    const stressedRecomm = [
        {
            
        }
    ]

    const lonelyRecomm = [
        {
            
        }
    ]

    const exploreRecomm = [
        {
            
        }
    ]

    function goToExplore() {
        navigate('/explore');
    }

    return (
        <div className="mindfulness-container">
            <div className='bg-container'></div>
            <div className='container'>
                <h1>Cultivating <br/> Mindfulness</h1>
                <div>
                    <h2>Why mindfulness?</h2>
                </div>
                <div>
                    <h2>Check these meditation sessions for when you are feeling <span className='mood-text'>{mood}</span>:</h2>

                </div>
                <button className='explore-button' onClick={goToExplore}>
                    GO TO EXPLORE
                </button>
          </div>
        </div>
      );
}