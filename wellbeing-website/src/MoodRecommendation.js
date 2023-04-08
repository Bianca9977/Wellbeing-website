import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/recommendations.scss';
import ActivityCard from './components/ActivityCard';

export default function MoodRecommendation() {
    let params = useParams();

    
    const timeResources = [
        {
            text: `MORNING <br/> BOOST`,
            route: '/'
        },
        {
            text: `AFTERNOON <br/> BOOST`,
            route: '/'
        },
        {
            text: `EVENING  <br/> BOOST`,
            route: '/'
        }
    ]

    const resources = [
        {
            text: `UNIVERSITY <br/> RESOURCES`,
            route: '/'
        }
    ]

    const recommendations = [
        {
            text: 'MINDFULNESS',
            route: '/'
        },
        {
            text: 'REFLECTION',
            route: '/'
        },
        {
            text: 'PEER SUPPORT',
            route: '/'
        }
    ];

    function getTime() {
        var myDate = new Date();
        var hours= myDate.getHours();
      
        if (hours < 12)
            return  timeResources[0];
        else if (hours >= 12 && hours <= 17)
            return timeResources[1];
        else if (hours >= 17 && hours <= 24)
            return timeResources[2];
      
      }

    const recommendationsCards = recommendations.map((recommendation, index) => {
        return <ActivityCard key={index} name={recommendation.text} activityRoute={recommendation.route} />
    })

    const resourcesCards = resources.map((resource, index) => {
        return <ActivityCard key={index} name={resource.text} activityRoute={resource.route} />
    })

    return (
        <div className="component-recommendations">
            <div className='bg-container'>
           
            </div>

            <div className='container'>
            <div className="col-left">
                <h1 className='title-text'>If you feel <br/><span className='mood-text'>{params.mood}</span></h1>
            </div>
            <div className="col-right">
                <h2>...have a look at...</h2>
                <div className='resources-container'>
                    <ActivityCard name={getTime().text} activityRoute={getTime().route} />
                    { resourcesCards }
                </div>
                <h2>...and try these activities tailored to your mood:</h2>
                <div className='activities-container'>
                    { recommendationsCards }
                </div>
            </div>
          </div>
        </div>
      );
}