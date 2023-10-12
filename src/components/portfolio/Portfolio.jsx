import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem
    })

    setItems(updatedItems);
  }

  return (
    <div className="section work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Web")}>Web</span>
        <span className="work__item" onClick={() => filterItem("AI")}>AI</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, description, category, link, display } = elem;
          return (
            <div className="work__card" key={id} style={{visibility: display}}>
              <div className="work__thumbnail">
                <img src={image} alt="Work" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <h3 className="work__desc">{description}</h3>
              <a href={link} className="work__button" target='_blank' rel='noreferrer'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio;