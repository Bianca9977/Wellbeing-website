import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/recommendations.scss';
import ActivityCard from './components/ActivityCard';

export default function MoodRecommendation() {
    let params = useParams();
    const mood = params.mood;

    const timeResources = [
        {
            text: `MORNING <br/> BOOST`,
            route: mood + '/morning',
        },
        {
            text: `AFTERNOON <br/> BOOST`,
            route: mood + '/afternoon',
        },
        {
            text: `EVENING  <br/> BOOST`,
            route: mood + '/evening',
        }
    ]

    const resources = [
        {
            text: `UNIVERSITY <br/> RESOURCES`,
            route: '/university-resources/' + mood
        }
    ]

    const recommendations = [
        {
            text: 'MINDFULNESS',
            route: '/mindfulness/' + mood,
        },
        {
            text: 'REFLECTION',
            route: '/reflection/' + mood,
        },
        {
            text: 'PEER SUPPORT',
            route: '/peer-support/' + mood,
        }
    ];

    function getTime() {
        var myDate = new Date();
        var hours= myDate.getHours();
      
        if (hours < 12) { 
            return timeResources[0];
        }
        else if (hours >= 12 && hours <= 17) { 
            return timeResources[1];
        }
        else if (hours >= 17 && hours <= 24) { 
            return timeResources[2];
        }
      
      }

    const recommendationsCards = recommendations.map((recommendation, index) => {
        return <ActivityCard key={index} name={recommendation.text} activityRoute={recommendation.route} />
    })

    const resourcesCards = resources.map((resource, index) => {
        return <ActivityCard key={index} name={resource.text} activityRoute={resource.route} />
    })

    return (
        <div className="component-recommendations">
            {/* <div className='bg-container'></div> */}
            <div className='container'>
            <div className="col-left">
                <h1 className='title-text'>If you feel <br/><span className='mood-text'>{mood}</span></h1>
            </div>
            <div className="col-right">
                <h2>...have a look at...</h2>
                <div className='resources-container'>
                    <ActivityCard name={getTime().text} activityRoute={'/day-boost/' + getTime().route} />
                    { resourcesCards }
                </div>
                <h2 className="padding-top">...and try these activities tailored to your mood:</h2>
                <div className='activities-container'>
                    { recommendationsCards }
                </div>
            </div>
          </div>
        </div>
      );
}