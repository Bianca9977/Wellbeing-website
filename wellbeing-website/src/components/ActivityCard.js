import React from 'react';
import '../styles/card.scss';

export default function ActivityCard(props) {
    return (
        <div className="component-activity-card">
          <span dangerouslySetInnerHTML={{ __html: props.name }}></span> 
        </div>
      );
}