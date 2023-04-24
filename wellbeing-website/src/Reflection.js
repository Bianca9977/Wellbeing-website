import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/reflection.scss';
import { Tooltip } from 'react-tooltip';
import Carousel from 'react-elastic-carousel';

export default function Reflection() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

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

    return (
        <div className="reflection-container">
          <div className='container'>
                <h1>Self-reflection for <br/> Personal Growth</h1>
                <div>
                    <h2>Why self-reflection?</h2>
                </div>

                <div className="text-area-container">
                    <Carousel breakPoints={breakPoints}>
                        {items.map((item, index) => (
                            <fieldset key={index}>
                              <legend className='legend' id={'legend-' +  index}>{item.question}</legend>
                              <textarea className="input" id={'input-' + index} name="myInput" rows="10" cols="50"></textarea>
                            </fieldset>
                        ))}
                    </Carousel>
                  <button className="save-button" onClick={downloadTxtFile} data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">Save answers</button>
                </div>
                <button className='explore-button' onClick={goToExplore}>
                    GO TO EXPLORE
                </button>
          </div>
          <Tooltip place="bottom" type="info" effect="solid" id="my-tooltip" />
        </div>
      );
}