import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/dayboost.scss';
import Header from './components/Header';
import BackButton from './components/BackButton';

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

    function goToHomepage() {
      navigate('/');
    }

    return (
        <div className="dayboost-container">
            <Header />
            <BackButton />
            <div className='container'>
              <h1>Resources for <br/> a smooth { time }</h1>
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