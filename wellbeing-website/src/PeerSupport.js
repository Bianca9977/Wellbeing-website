import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/peersupport.scss';
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function PeerSupport() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
        link: 'https://discord.gg/wqG4xW4fkP'
      },
      {
        name: 'Mindfulness Chat <br/><span> Click to join</span>',
        recommended: false,
        link: 'https://discord.gg/BjUWETxkvC'
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
              <h1 data-aos="fade-up"
                data-aos-duration="1000">Peer support for community wellbeing</h1>
              <div data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">
                  <h2 className='margin-top'>How does it work?</h2>
                  <p className='text'>
                    An important factor which contributes to mentall wellbeing is represented by the presence of positive social relationships.
                    The aim of the Discord chats is to create an open and safe environment, where you can interact with like-minded people, discuss
                    and explore additional resources and activities.
                  </p>
              </div>
              <div className='chats-container' data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">

                <div>
                {(mood !== 'explore') && <h2 className='margin-top text-center'>Recommended chat if you feel <span className='mood-text'>{mood}</span>:</h2>}
                {(mood !== 'explore') &&
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
                }
                </div>


                <div>
                {(mood === 'explore') &&
                  <h2 className='margin-top text-center'>All available chats:</h2>
                }
                {(mood === 'explore') &&
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
                }
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