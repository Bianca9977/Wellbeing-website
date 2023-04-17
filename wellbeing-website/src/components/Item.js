import React from 'react';
import '../styles/item.scss';

export default function Item(props) {

  return (
      <div  className="component-item">
        {props.item.title}
      </div>
    );
}