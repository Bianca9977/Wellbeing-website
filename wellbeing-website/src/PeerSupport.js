import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/peersupport.scss';
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function PeerSupport() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    const happyRecomm = [
      {
        name: 'Casual Chat <br/><span> Click to join</span>',
        recommended: true,
        link: 'https://discord.gg/BjUWETxkvC'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Reflection Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/Zjba5yEhDt'
      },
    ]

    const sadRecomm = [
      {
        name: 'Casual Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/BjUWETxkvC'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Reflection Chat <br/><span> Click to join</span>',
        recommended: true,
        link: 'https://discord.gg/Zjba5yEhDt'
      },
    ]

    const stressedRecomm = [
      {
        name: 'Casual Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/BjUWETxkvC'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: true,
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Reflection Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/Zjba5yEhDt'
      }
    ]

    const lonelyRecomm = [
      {
        name: 'Casual Chat <br/><span> Click to join</span>',
        recommended: true,
        link: 'https://discord.gg/BjUWETxkvC'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Reflection Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/Zjba5yEhDt'
      },
    ]

    const exploreRecomm = [
      {
        name: 'Casual Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/BjUWETxkvC'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Reflection Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/Zjba5yEhDt'
      },
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
        case 'lonely':
          return lonelyRecomm;
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
        <div className="peersupport-container">
          <Header />
          <BackButton />
          <div className='container'>
              <h1>Peer support for <br/> community wellbeing</h1>
              <div>
                  <h2 className='margin-top'>How does it work?</h2>
                  <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className='chats-container'>
                {(mood !== 'explore') && <h2 className='margin-top'>Recommended chat if you feel <span className='mood-text'>{mood}</span>:</h2>}
                <div className='recommended-chats'>
                  {getMoodArray().map((item, index) => { 
                  return  item.recommended &&
                    <div className='chat' key={index}>
                      <a href={item.link} target="_blank">
                        <p dangerouslySetInnerHTML={{ __html: item.name }}></p>
                      </a>                
                    </div>
                    })}
                </div>
                {(mood !== 'explore') ? (
                  <h3 className='margin-top'>Other chats:</h3>
                ) : (
                  <h3 className='margin-top'>All available chats:</h3>
                )}
                <div className='other-chats'>
                  {getMoodArray().map((item, index) => { 
                  return !item.recommended &&
                      <div className='chat' key={index}>
                        <a href={item.link} target="_blank">
                          <p dangerouslySetInnerHTML={{ __html: item.name }}></p>
                        </a>                
                      </div>
                    })}
                </div>
              </div>
              <div>

              {(mood !== 'explore') ?  (<button className='explore-button' onClick={goToExplore}>
                  GO TO EXPLORE
              </button> ) : (
                <button className='explore-button' onClick={goToHomepage}>
                  INPUT MOOD
                </button>
              )}
              </div>
          </div>
        </div>
      );
}