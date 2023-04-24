import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/dayboost.scss';

export default function DayBoost() {
    let navigate = useNavigate();
    let params = useParams();
    const time = params.time;

    const morningRecomm = [
      {
        link: '',
        text: "text1"
      },
      {
        link: '',
        text: "text2"
      }
    ]

    const afternoonRecomm = [
      {
        link: '',
        text: "text1"
      },
      {
        link: '',
        text: "text2"
      }
    ]

    const eveningRecomm = [
      {
        link: '',
        text: "text1"
      },
      {
        link: '',
        text: "text2"
      }
    ]

    function getTimeArray() {
      switch (time) {
        case 'morning':
          return morningRecomm;
          break;
        case 'afternoon':
          return afternoonRecomm;
          break;
        case 'evening':
          return eveningRecomm;
          break;
      }
    }

    function goToExplore() {
      navigate('/explore');
    }

    return (
        <div className="dayboost-container">
            <div className='container'>
              <h1>Resources for a <br/> smooth { time }</h1>
              <div className="resources-container">
                  {getTimeArray().map((item, index) => 
                    <div className='resource' key={index}>
                      <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                    </div>
                  )}
              </div>

              <button className='explore-button' onClick={goToExplore}>
                  GO TO EXPLORE
              </button>
          </div>
        </div>
      );
}