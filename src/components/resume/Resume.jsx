import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();

  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">{t('resume.title')}</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.filter(val => val.category === 'education').map((val, id) => (
            <Card key={id} name={val.name} icon={val.icon} skills={val.skills} />
          ))}
        </div>

        <div className="timeline grid">
          {Data.filter(val => val.category === 'experience').map((val, index) => (
            <Card key={index} name={val.name} icon={val.icon} link={val.link} messageLink={val.messageLink} skills={val.skills}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume;