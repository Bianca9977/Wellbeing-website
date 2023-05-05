import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/reflection.scss';
import { Tooltip } from 'react-tooltip';
import Carousel from 'react-elastic-carousel';
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function Reflection() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1},
      { width: 768, itemsToShow: 1}
    ];

    let items= [
      {question: 'item #1'},
      {question: 'item #2'},
    ]

    const happyRecomm = [
      {
        question: 'What makes you feel happy at this moment?'
      },
      {
        question: 'What are you grateful for today?'
      },
      {
        question: 'Let your thoughts free'
      }
    ]

    const sadRecomm = [
      {
        question: 'What makes you feel sad at this moment?'
      },
      {
        question: 'How did you overcome this feeling in the past?'
      },
      {
        question: 'Let your thoughts free'
      }
    ]

    const stressedRecomm = [
      {
        question: 'What makes you feel stressed at this moment?'
      },
      {
        question: 'What can you try doing differently if the problem recurs?'
      },
      {
        question: 'Let your thoughts free'
      }
    ]

    const lonelyRecomm = [
      {
        question: 'What makes you feel lonely at this moment?'
      },
      {
        question: 'What activities could you do to minimise this feeling?'
      },
      {
        question: 'Let your thoughts free'
      }
    ]

    const exploreRecomm = [
      {
        question: 'How have you been during the past few days?'
      },
      {
        question: 'What is a goal you want to accomplish in the near future?'
      },
      {
        question: 'Let your thoughts free'
      }
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

    function getDate() {
      let myDate = new Date();
      let day = myDate.getDate();
      let month = myDate.getMonth() + 1;

      if (month < 10) {
        month = "0" + month.toString();
      }

      let date = day.toString() + month;

      return date;
    }

    function downloadTxtFile() {
      let text = "";
      let element = document.createElement("a");
      let questions = document.querySelectorAll(".legend");
      questions.forEach((question, index) => {
        let questionText = question.innerHTML;
        let answer = document.getElementById('input-' + index).value;
        text = text + questionText + "\n" + answer + "\n\n";
      });

      let file = new Blob([text], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "answers" + getDate() + ".txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

    function goToHomepage() {
      navigate('/');
    }

    return (
        <div className="reflection-container">
          <Header />
          <BackButton />
          <div className='container'>
              <h1 data-aos="fade-up"
                data-aos-duration="1000">Self-reflection for Personal Growth</h1>
              <div data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">
                  <h2>Why self-reflection?</h2>
                  <p className='text'>Self-reflection has been regarded as a useful tool for tracking and impoving wellbeing and personal health.
                  By reflecting on your current mood, you can gain a better understanding of your thoughts and feelings, which
                  will lead to positive behaviour change and increased self-awareness. 
                  </p>
              </div>
              <div data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
              {(mood !== 'explore') ?  (
                <h2>Reflect on these questions when you are feeling <span className='mood-text'>{mood}</span>:</h2>)
                : (
                <h2>Reflect on these questions to gain a better understanding of your feelings:</h2>
              )}
              </div>
              <div className="text-area-container" data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
                  <Carousel breakPoints={breakPoints}>
                      {getMoodArray().map((item, index) => (
                          <fieldset key={index}>
                            <legend className='legend' id={'legend-' +  index}>{item.question}</legend>
                            <textarea className="input" id={'input-' + index} name="myInput" rows="10" cols="50"></textarea>
                          </fieldset>
                      ))}
                  </Carousel>
                <button className="save-button" onClick={downloadTxtFile}>Download answers</button>
              </div>
              {(mood !== 'explore') ?  (<button className='explore-button' onClick={goToExplore}>
                  GO TO EXPLORE
              </button> ) : (
                <button className='explore-button' onClick={goToHomepage}>
                  INPUT MOOD
                </button>
              )}
          </div>
     {/*      <Tooltip place="bottom" type="info" effect="solid" id="save-tooltip" /> */}
        </div>
      );
}