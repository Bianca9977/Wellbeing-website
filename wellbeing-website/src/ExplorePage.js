import React from 'react';
import './styles/recommendations.scss';
import ActivityCard from './components/ActivityCard';
import { useNavigate } from "react-router-dom";

export default function ExplorePage() {

    let navigate = useNavigate();
    
    const timeResources = [
        {
            text: `MORNING <br/> BOOST`,
            route: 'explore/morning'
        },
        {
            text: `AFTERNOON <br/> BOOST`,
            route: 'explore/afternoon'
        },
        {
            text: `EVENING  <br/> BOOST`,
            route: 'explore/evening'
        }
    ]

    const resources = [
        {
            text: `UNIVERSITY <br/> RESOURCES`,
            route: '/university-resources/explore' 
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

    function goToHomepage() {
        navigate('/Wellbeing-website');
    }

    return (
        <div className="component-recommendations">
            <div className='bg-container'></div>
            <div className='container'>
            <div className="col-left">
                <h1 className='title-text explore-text'>Explore all <br/> available resources <br/> and activities, not <br/> related to a <br/> particular mood
                <br/>
                <br/>
                Or input your mood <span onClick={goToHomepage}>here</span>
                </h1>
            </div>
            <div className="col-right">
                <h2>Check these resources...</h2>
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