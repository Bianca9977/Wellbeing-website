import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/reflection.scss';

export default function Reflection() {
    let navigate = useNavigate();
    let params = useParams();
    const mood = params.mood;

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

    function downloadTxtFile() {
      let element = document.createElement("a");
      let file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

    return (
        <div className="reflection-container">
          <div className='container'>
                <h1>Self-reflction for <br/> Personal Growth</h1>
                <div>
                    <h2>Why self-reflection?</h2>
                </div>

                <div className="text-area-container">
                  <fieldset>
                  {/* <label for="myInput">Review of W3Schools:</label> */}
                  <legend>Your heading</legend>
                  <textarea id="myInput" name="myInput" rows="10" cols="50"></textarea>
                  </fieldset>
                  <button onClick={downloadTxtFile}>Save answers</button>
                </div>
                <button className='explore-button' onClick={goToExplore}>
                    GO TO EXPLORE
                </button>
          </div>
        </div>
      );
}