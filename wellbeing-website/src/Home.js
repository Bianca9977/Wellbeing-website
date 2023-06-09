import React, { useState } from 'react';
import Select from 'react-select';
import ThemeButton from './components/ThemeButton';
import './App.scss';
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [mood, setMood] = useState(null);

  const handleChange = (selectedOption) => {
      setMood(selectedOption);
      if (selectedOption.slug != "explore") { 
        navigate('/recommendation/' + selectedOption.slug);
      }
      else {
        navigate('/explore');
      }
  };

  const options = [
    { 
      value: 1,
      slug: 'happy',
      label: "Happy"
    },
    {
      value:  2,
      slug: 'sad',
      label: "Sad"
    },
    {
      value:  3,
      slug: 'stressed',
      label: "Stressed"
    },
    {
      value:  4,
      slug: 'lonely',
      label: "Lonely"
    },
    {
      value: 4,
      slug: 'explore',
      label: "Explore"
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
          <ThemeButton></ThemeButton>
          <h2>Welcome to <span className='bold-text'>Lull</span>, a website for mental wellbeing  <br/> created for international graduate students.</h2>
          <h2 className='subtext'>Input your mood and <br/> explore suggested activities</h2>
          <Select options={options}  onChange={handleChange} isSearchable={false} placeholder="Select a mood"
          className="react-select-container"
          classNamePrefix="react-select" />
        </div>
      </div>
    );

}

 