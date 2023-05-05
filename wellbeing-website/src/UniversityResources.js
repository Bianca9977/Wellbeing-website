import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import './styles/universityresources.scss';
import { useNavigate } from "react-router-dom";
import Header from './components/Header';
import BackButton from './components/BackButton';

export default function UniversityResources() {
    let params = useParams();
    let navigate = useNavigate();
    const mood = params.mood;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const resources = [
      {
        link: 'https://www.kth.se/en/student/stod/halsa/studenthalsan/valkommen-till-studenthalsan-i-stockholm-1.409886',
        text: "Stockholm Student Health Services"
      },
      {
        link: 'https://www.kth.se/en/student/stod',
        text: "Support and Guidance from KTH"
      },
      {
        link: 'https://ths.kth.se/en/events',
        text: 'THS Events'
      }
    ]

    function goToExplore() {
      navigate('/explore');
    }

    function goToHomepage() {
      navigate('/');
    }

    return (
      <div className="university-container">
        <Header />
        <BackButton />
        <div className='container'>
            <h1 data-aos="fade-up"
                data-aos-duration="1000">University Resources</h1>
            <h2 data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">Check these external resources for students from your unviversity:</h2>
            <div className="resources-container" data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="1000">
                {resources.map((item, index) => 
                    <a className='resource' key={"resource_" + index} href={item.link} target="_blank">
                      <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                    </a>
                )}
            </div>

            {(mood !== 'explore') ?  (<button className='explore-button' onClick={goToExplore}>
                GO TO EXPLORE
            </button> ) : (
              <button className='explore-button' onClick={goToHomepage}>
                INPUT MOOD
              </button>
            )}
        </div>
      </div>
    );
}