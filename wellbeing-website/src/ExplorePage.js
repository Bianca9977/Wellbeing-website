import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './styles/recommendations.scss';
import ActivityCard from './components/ActivityCard';

export default function ExplorePage() {
    
    const timeResources = [
        {
            text: `MORNING <br/> BOOST`,
            route: 'morning'
        },
        {
            text: `AFTERNOON <br/> BOOST`,
            route: 'afternoon'
        },
        {
            text: `EVENING  <br/> BOOST`,
            route: 'evening'
        }
    ]

    const resources = [
        {
            text: `UNIVERSITY <br/> RESOURCES`,
            route: '/university-resources'
        },
        {
            text: `FOCUS <br/> MUSIC`,
            route: '/focus-music'
        }
    ]

    const recommendations = [
        {
            text: 'MINDFULNESS',
            route: '/mindfulness/explore',
        },
        {
            text: 'REFLECTION',
            route: '/reflection/explore',
        },
        {
            text: 'PEER SUPPORT',
            route: '/peer-support/explore',
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
            <div className='bg-container'></div>
            <div className='container'>
            <div className="col-left">
                <h1 className='title-text explore-text'>Explore all <br/> available resources <br/> and activities, not <br/> related to a <br/> particular mood</h1>
            </div>
            <div className="col-right">
                <h2>...have a look at...</h2>
                <div className='resources-container'>
                    <ActivityCard name={getTime().text} activityRoute={'/day-boost/' + getTime().route} />
                    { resourcesCards }
                </div>
                <h2 className="padding-top">...and try these activities:</h2>
                <div className='activities-container'>
                    { recommendationsCards }
                </div>
            </div>
          </div>
        </div>
      );
}