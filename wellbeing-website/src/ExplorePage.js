import React, {useEffect} from 'react';
import './styles/recommendations.scss';
import ActivityCard from './components/ActivityCard';
import { useNavigate } from "react-router-dom";
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function ExplorePage() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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
            route: '/focus-music/explore'
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
        navigate('/');
    }

    return (
        <div className="component-recommendations">
            <Header />
            <BackButton />
            <div className='container'>
            <div className="col-left" data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000">
                <h1 className='title-text explore-text'>Explore available <br/> resources and <br/> activities, not <br/> related to a <br/> particular mood
                <br/>
                <br/>
                Or input your <br/> mood <span onClick={goToHomepage}>here</span>
                </h1>
            </div>
            <div className="col-right" data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
                <h2 data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">Check these resources...</h2>
                <div data-aos="fade-up"
                data-aos-delay="3000"
                data-aos-duration="1000" className='resources-container'>
                    <ActivityCard name={getTime().text} activityRoute={'/day-boost/' + getTime().route} />
                    { resourcesCards }
                </div>
                <h2 className="padding-top" data-aos="fade-up"
                data-aos-delay="4000"
                data-aos-duration="1000">...and try these activities:</h2>
                <div className='activities-container' data-aos="fade-up"
                data-aos-delay="5000"
                data-aos-duration="1000">
                    { recommendationsCards }
                </div>
            </div>
          </div>
        </div>
      );
}