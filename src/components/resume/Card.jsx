import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = (props) => {
  const { t } = useTranslation();

  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <h3 className="timeline__title">{t("resume.exp.titles." + props.name)}</h3>
      <h3 className="timeline__localisation">
        <span className="timeline__company">{t("resume.exp.companies." + props.name)}</span> <strong>-</strong> {t("resume.exp.locations." + props.name)}
      </h3>
      <span className="timeline__date">{t("resume.exp.years." + props.name)}</span>
      <br />
      <a href={props.link} className="custom-link" target="_blank" rel="noreferrer">
        {t("resume.exp.linksTitles." + props.name)}
      </a>
      <p className="timeline__text" dangerouslySetInnerHTML={{ __html: t('resume.exp.descs.' + props.name) }}></p>
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