import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/dayboost.scss';

export default function DayBoost() {
    let navigate = useNavigate();
    let params = useParams();
    const time = params.time;
    const mood = params.mood;

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

    function goBack() {
      navigate(-1);
    }

    function goToHomepage() {
      navigate('/Wellbeing-website');
    }

    return (
        <div className="dayboost-container">
            <div className='container'>
              <button className='back-button' onClick={goBack}>
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8228 24.4859C17.6302 24.4866 17.44 24.4441 17.2661 24.3616C17.0921 24.279 16.9388 24.1586 16.8176 24.0091L10.593 16.2767C10.4034 16.0461 10.2998 15.7568 10.2998 15.4583C10.2998 15.1598 10.4034 14.8706 10.593 14.64L17.0366 6.9076C17.2554 6.64442 17.5697 6.47892 17.9105 6.4475C18.2513 6.41608 18.5906 6.52132 18.8537 6.74007C19.1169 6.95882 19.2824 7.27315 19.3139 7.61393C19.3453 7.9547 19.24 8.294 19.0213 8.55718L13.2607 15.4648L18.828 22.3724C18.9856 22.5616 19.0857 22.7919 19.1164 23.0362C19.1472 23.2805 19.1074 23.5284 19.0016 23.7508C18.8959 23.9731 18.7287 24.1605 18.5197 24.2908C18.3108 24.4211 18.069 24.4888 17.8228 24.4859Z" fill="#231F20"/>
                </svg>
                <span>Back</span>
              </button>
              <h1>Resources for a <br/> smooth { time }</h1>
              <div className="resources-container">
                  {getTimeArray().map((item, index) => 
                    <div className='resource' key={index}>
                      <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                    </div>
                  )}
              </div>

              {(mood !== 'explore') ?  (<button className='explore-button' onClick={goToExplore}>
                  GO TO EXPLORE
              </button> ) : (
                <button className='explore-button' onClick={goToHomepage}>
                  INPUT MOOD
                </button>
              )}
          </div>
        </div>
      );
}