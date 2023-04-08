import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './Home';
import MoodRecommendation from './MoodRecommendation';

export default function App() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendation/:mood" element={<MoodRecommendation />} />
            </Routes>
          </div>
        </Router>
      </div>
    );

}

 