import React from 'react';
import '../styles/item.scss';

export default function Item(props) {

  return (
    <div className="component-item" onClick={props.onClick}>
      <div className='video-container'>
        <div className='circle'>
          <div className='triangle'></div>
        </div>
      </div>
      <div className='title'>
        {props.item.title}
      </div>
    </div>
  );
}