import React from 'react';
import "./about.css";
import Profil2 from "../../assets/profiles/profil-2.jpg";
import AboutBox from './AboutBox';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">{t('about.title')}</h2>

      <div className="about__container grid">
        <img src={Profil2} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description" dangerouslySetInnerHTML={{ __html: t('about.description') }}></p>
            <a href={t('about.cvLink')} className="btn" target='_blank' rel="noreferrer">{t('about.cvButtonText')}</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">{t('about.skills.fullstack_webTitle')}</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">{t('about.skills.aiTitle')}</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage fullstack_web"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">{t('about.skills.dataTitle')}</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ai"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About