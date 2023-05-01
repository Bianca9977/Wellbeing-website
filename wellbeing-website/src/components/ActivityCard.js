import React from 'react';
import '../styles/card.scss';
import { useNavigate } from "react-router-dom";

export default function ActivityCard(props) {
  let navigate = useNavigate();

  function goToRoute() {
    navigate(props.activityRoute);
  }

  return (
      <div className="component-activity-card" onClick={goToRoute} >
        <span dangerouslySetInnerHTML={{ __html: props.name }}></span> 
      </div>
    );
}