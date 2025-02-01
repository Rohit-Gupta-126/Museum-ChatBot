import React from 'react';

export default function ExhibitionCard ({ title, description, image, date }) {
  return (
    <div className="exhibition-card z-40">
      <img src={image} alt={title} />
      <div className="titledate flex justify-between">
        <h3>{title}</h3>
        <h3>{date}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}