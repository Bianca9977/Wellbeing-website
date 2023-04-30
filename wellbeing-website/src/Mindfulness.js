import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/mindfulness.scss';
import './styles/common.scss';
import { useNavigate } from "react-router-dom";
import Item from './components/Item';
import Header from './components/Header';
import BackButton from './components/BackButton';
import VideoModaL from './components/VideoModal';

export default function Mindfulness() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    const [isToggled, setIsToggled] = useState(false);
    const [modalVideoLink, setModalVideoLink] = useState('');

    const openModal = (link) => {
        console.log("open modal " + link);
        setLink(link);
        setIsToggled(!isToggled);
    }

    const closeModal = () => {
        console.log("close modal " );
        setLink('');
        setIsToggled(!isToggled);
    }

    const setLink = (link) => {
        console.log("set link " + link);
        setModalVideoLink(link)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 }
    ];

    const happyRecomm = [
        {id: 1, title: '10 Minutes Outdoor Walking Meditation', link: 'https://www.youtube.com/embed/HE9iP3B4Azo'},
        {id: 2, title: '1 Minute Mini Meditation: Breathe', link: 'https://www.youtube.com/embed/cEqZthCaMpo'},
        {id: 3, title: '1 Minute Mini Meditation: Appreciate Nature', link: 'https://www.youtube.com/embed/nsGbtrl1WkU'},
    ]

    const sadRecomm = [
        {id: 1, title: '10 Minutes Reset Meditation', link: 'https://www.youtube.com/embed/QHkXvPq2pQE'},
        {id: 2, title: '6 Minutes Calming Meditation for Crisis Response', link: 'https://www.youtube.com/embed/e0NYq1KHdUA'},
        {id: 3, title: '1 Minute Mini Meditation: Unwind', link: 'https://www.youtube.com/embed/ldFD-L-Csz0'},
    ]

    const stressedRecomm = [
        {id: 1, title: '10 Minutes Meditation to Reframe Stress', link: 'https://www.youtube.com/embed/sG7DBA-mgFY'},
        {id: 2, title: '12 Minutes Breathing Practice for Exams', link: 'https://www.youtube.com/embed/LBbQK2HIvvI'},
        {id: 3, title: '10 Minutes Meditation for Stress', link: 'https://www.youtube.com/embed/lS0kcSNlULw'},
    ]

    const exploreRecomm = [
        {id: 1, title: '3 Minutes Meditation for Identifying Feelings', link: 'https://www.youtube.com/embed/2mcIUWOr3B4'},
        {id: 2, title: '1 Minute Mini Meditation: Breathe', link: 'https://www.youtube.com/embed/cEqZthCaMpo'},
        {id: 3, title: '1 Minute Mini Meditation: Appreciate Nature', link: 'https://www.youtube.com/embed/nsGbtrl1WkU'},
        {id: 4, title: '1 Minute Mini Meditation: Unwind', link: 'https://www.youtube.com/embed/ldFD-L-Csz0'},
        {id: 5, title: '10 Minutes Outdoor Walking Meditation', link: 'https://www.youtube.com/embed/HE9iP3B4Azo'},
        {id: 6, title: '10 Minutes Reset Meditation', link: 'https://www.youtube.com/embed/QHkXvPq2pQE'},
        {id: 7, title: '10 Minutes Meditation to Reframe Stress', link: 'https://www.youtube.com/embed/sG7DBA-mgFY'},
        {id: 8, title: '12 Minutes Breathing Practice for Exams', link: 'https://www.youtube.com/embed/LBbQK2HIvvI'},
    ]

    function getMoodArray() {
        switch (mood) {
            case 'happy':
            return happyRecomm;
            break;
            case 'sad':
            return sadRecomm;
            break;
            case 'stressed':
            return stressedRecomm;
            break;
            default:
            return exploreRecomm;
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
        <div className="mindfulness-container">
            <Header />
            <BackButton />
            <div className='container'>
                <h1>Cultivating <br/> Mindfulness</h1>
                <div>
                    <h2>Why mindfulness?</h2>
                </div>
                <div>
                    {(mood !== 'explore') ?  (
                    <h2>Check these meditation sessions for when you are feeling <span className='mood-text'>{mood}</span>:</h2>)
                    : (
                    <h2>Explore these meditation sessions:</h2>
                    )}
                    <Carousel breakPoints={breakPoints}>
                        {getMoodArray().map((item) => (
                            <Item onClick={() => openModal(item.link)} key={item.id} item={item}></Item>
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
          
            {isToggled && 
                <VideoModaL onClickClose={() => closeModal()} link={modalVideoLink}></VideoModaL>
            }
        </div>
      );
}