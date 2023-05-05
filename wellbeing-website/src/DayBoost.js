import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/dayboost.scss';
import Header from './components/Header';
import BackButton from './components/BackButton';
import Carousel from 'react-elastic-carousel';
import VideoModaL from './components/VideoModal';
import Item from './components/Item';

export default function DayBoost() {
    let navigate = useNavigate();
    let params = useParams();
    const time = params.time;
    const mood = params.mood;

    const [isToggled, setIsToggled] = useState(false);
    const [modalVideoLink, setModalVideoLink] = useState('');

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const openModal = (link) => {
      setLink(link);
      document.body.style.overflow = 'hidden';
      setIsToggled(!isToggled);
    }

    const closeModal = () => {
      setLink('');
      document.body.style.overflow = 'auto';
      setIsToggled(!isToggled);
    }

    const setLink = (link) => {
      setModalVideoLink(link)
    }

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 768, itemsToShow: 2, itemsToScroll: 2 }
    ];

    const morningRecomm = [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/bRXm9Ct9wwI',
        title: "How to Start a Mindful Morning Routine"
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/m-63HSBOPqo',
        title: "20 Minutes Wake Up Home Workout"
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/IReEu2kI6oI',
        title: "1 Minute Mini Meditation for Focus Finding"
      }
    ]

    const afternoonRecomm = [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/QtE00VP4W3Y',
        title: "2 Minutes Meditation for Quick Focus Reset"
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/eY54f3dyhcI',
        title: "1 Minute Mini Meditation for Experiencing your Food"
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/Sh01VlBomI8',
        title: "25 Minutes Motivation Boosting Workout"
      }
    ]

    const eveningRecomm = [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/ft-vhYwHzxw',
        title: "Dealing with Racing Thoughts While Trying To Sleep"
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/oA9sOhJaGGQ',
        title: "45 Minutes Bedtime Story for Adults"
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/0HnvJLDtPwY',
        title: "45 Minutes Deep Sleep Music"
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
            <h1 data-aos="fade-up"
                data-aos-duration="1000">Resources for <br/> a smooth { time }</h1>
            <h2 data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">Explore these additional resources for a productive day and a calm evening:</h2>
            <div className="resources-container" data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
              <Carousel breakPoints={breakPoints} enableMouseSwipe={false}>
                {getTimeArray().map((item) => (
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