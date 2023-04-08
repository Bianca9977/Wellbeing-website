import React, { useState } from 'react';
import Select from 'react-select';
import './App.scss';


export default function App() {

  const [mood, setMood] = useState(null);

  const handleChange = (selectedOption) => {
    setMood(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    { 
      value: 1,
      label: "Happy"
    },
    {
      value:  2,
      label: "Sad"
    },
    {
      value:  3,
      label: "Stressed"
    },
    {
      value:  4,
      label: "Lonely"
    },
    {
      value: 5,
      label: "I don't know"
    }
  ];

  function greeting() {
    var myDate = new Date();
    var hours= myDate.getHours();
    var greet;
  
    if (hours < 12)
        greet =  "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "evening";
  
    return <span>Good <br/> {greet}!</span>
  }

    return (
      <div className="component-app">
        <div className='container'>
          <h1>{ greeting() }</h1>
          <h2>Input your mood and <br/> explore suggested activities</h2>
          <Select options={options}  onChange={handleChange} isSearchable={false} placeholder="Select a mood"
          className="react-select-container"
          classNamePrefix="react-select" />
        </div>
      </div>
    );

}

 