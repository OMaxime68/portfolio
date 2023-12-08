import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem
    })

    setItems(updatedItems);
  }

  return (
    <div className="section work container section" id="portfolio">
      <h2 className="section__title">{t('portfolio.sectionTitle')}</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>{t('portfolio.filterLabels.everything')}</span>
        <span className="work__item" onClick={() => filterItem("web")}>{t('portfolio.filterLabels.web')}</span>
        <span className="work__item" onClick={() => filterItem("ai")}>{t('portfolio.filterLabels.ai')}</span>
        <span className="work__item" onClick={() => filterItem("software")}>{t('portfolio.filterLabels.software')}</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, name, category, image, link, display } = elem;
          return (
            <div className="work__card" key={id} style={{visibility: display}}>
              <div className="work__thumbnail">
                <img src={image} alt="Work" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{t(`portfolio.filterLabels.${category}`)}</span>
              <h3 className="work__title">{t(`portfolio.works.titles.${name}`)}</h3>
              <h3 className="work__desc">{t(`portfolio.works.descriptions.${name}`)}</h3>
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