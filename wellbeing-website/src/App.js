import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './Home';
import MoodRecommendation from './MoodRecommendation';
import ExplorePage from './ExplorePage';

export default function App() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
                <Route path="/Wellbeing-website" element={<Home />} />
                <Route path="/recommendation/:mood" element={<MoodRecommendation />} />
                <Route path="/explore" element={<ExplorePage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );

}

 