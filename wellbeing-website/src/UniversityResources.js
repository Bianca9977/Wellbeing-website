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
        link: '',
        text: "text1"
      },
      {
        link: '',
        text: "text2"
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
            <div className="resources-container" data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000">
                {resources.map((item, index) => 
                  <div className='resource' key={index}>
                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
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