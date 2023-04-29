import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/mindfulness.scss';
import './styles/common.scss';
import { useNavigate } from "react-router-dom";
import Item from './components/Item';
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function Mindfulness() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    let items= [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
    ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 }
    ];

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

    function goToHomepage() {
        navigate('/');
    }

    return (
        <div className="mindfulness-container">
            <Header />
            <BackButton />
            <div className='container'>
                <h1>Cultivating <br/> Mindfulness</h1>
                <div>
                    <h2>Why mindfulness?</h2>
                </div>
                <div>
                    
                    <h2>Check these meditation sessions for when you are feeling <span className='mood-text'>{mood}</span>:</h2>
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item) => (
                            <Item key={item.id} item={item}></Item>
                        ))}
                    </Carousel>
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