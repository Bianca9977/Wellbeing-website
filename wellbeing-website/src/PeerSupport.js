import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/peersupport.scss';

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

    return (
        <div className="peersupport-container">
          <div className='container'>
              <h1>Peer support for <br/> community wellbeing</h1>
              <div>
                  <h2>How does it work?</h2>
              </div>
              <div className='chats-container'>
                {(mood != 'explore') && <h2>Recommended Chats</h2>}
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
                {(mood != 'explore') ? (
                  <h3>Other chats:</h3>
                ) : (
                  <h3>All available chats:</h3>
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

              <button className='explore-button' onClick={goToExplore}>
                  GO TO EXPLORE
              </button>
          </div>
        </div>
      );
}