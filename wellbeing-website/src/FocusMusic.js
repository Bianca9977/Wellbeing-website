import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/focusmusic.scss';
import Header from './components/Header';
import BackButton from './components/BackButton';
import Carousel from 'react-elastic-carousel';
import VideoModaL from './components/VideoModal';
import Item from './components/Item';

export default function FocusMusic() {
    let navigate = useNavigate();
    let params = useParams();

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

    const items = [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/OEoZCRyGRes',
        title: "1 Hour Focus and Study Lo-Fi Music"
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/di1RycJZH9c',
        title: "1 Hour Focus Music: Deep Blue"
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/02eNMgjjyF4',
        title: "Focus Music for Work, Studying, and Finding Attention"
      }
    ]

    function goToExplore() {
      navigate('/explore');
    }

    function goToHomepage() {
      navigate('/');
    }

    return (
      <div className="focusmusic-container">
          <Header />
          <BackButton />
          <div className='container'>
            <h1 data-aos="fade-up"
                data-aos-duration="1000">Focus music <br/> for productivity</h1>
            <h2 data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">Explore these music compilations for when you want to focus or just want some background noise:</h2>
            <div className="resources-container" data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
              <Carousel breakPoints={breakPoints} enableMouseSwipe={false}>
                {items.map((item) => (
                    <Item onClick={() => openModal(item.link)} key={item.id} item={item}></Item>
                ))}
              </Carousel>
            </div>

            <button className='explore-button' onClick={goToHomepage}>
              INPUT MOOD
            </button>
        </div>
        {isToggled && 
          <VideoModaL onClickClose={() => closeModal()} link={modalVideoLink}></VideoModaL>
        }
      </div>
    );
}