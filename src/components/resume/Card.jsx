import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <h3 className="timeline__title">{props.title}</h3>
      <h3 className="timeline__localisation">
        <span className="timeline__company">{props.company}</span> <strong>-</strong> {props.localisation}
      </h3>
      <span className="timeline__date">{props.year}</span>
      <br />
      <a href={props.link} className="custom-link" target="_blank" rel="noreferrer">
        {props.messageLink}
      </a>
      <p className="timeline__text">{props.desc}</p>
      <br />
      {props.skills && props.skills.length > 0 && (
  props.skills.map((skillsClass, index) => (
    <i key={index} className={`${skillsClass} fa-2x`} style={{ marginRight: '2rem', marginBottom: '1rem', color: '#3F72AF' }} />
  ))
)}

    </div>
  );
};

export default Card;