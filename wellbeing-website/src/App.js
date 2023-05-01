import React, {useEffect} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Home from './Home';
import MoodRecommendation from './MoodRecommendation';
import ExplorePage from './ExplorePage';
import Mindfulness from './Mindfulness';
import Reflection from './Reflection';
import PeerSupport from './PeerSupport';
import UniversityResources from './UniversityResources';
import DayBoost from './DayBoost';
import FocusMusic from './FocusMusic';
import './styles/lightmode.scss';

export default function App() {

    useEffect(() => {
      setTheme();
    }, []);

    function setTheme() {
      if (localStorage.getItem('webTheme') == 'Dark') {
        window.webTheme = "Dark";
        localStorage.setItem('webTheme', window.webTheme);
        var element = document.body;
        element.classList.remove("light-mode");
      } else if (localStorage.getItem('webTheme') == 'Light') {
        window.webTheme = "Light";
        localStorage.setItem('webTheme', window.webTheme);
        var element = document.body;
        element.classList.add("light-mode");
      }
      else {
        window.webTheme = "Dark";
        localStorage.setItem('webTheme', window.webTheme);
      }
    }
    return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendation/:mood" element={<MoodRecommendation />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/mindfulness/:mood" element={<Mindfulness />} />
            <Route path="/reflection/:mood" element={<Reflection />} />
            <Route path="/peer-support/:mood" element={<PeerSupport />} />
            <Route path="/university-resources/:mood" element={<UniversityResources />} />
            <Route path="/day-boost/:mood/:time" element={<DayBoost />} />
            <Route path="/focus-music/:mood" element={<FocusMusic />} />
        </Routes>
      </div>
    );

}

 