import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutBox = () => {
  const { t } = useTranslation();

  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">≈ 30</h3>
                <span className="about__subtitle">{t('about.aboutBox.projectsSubtitle')}</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">3648</h3>
                <span className="about__subtitle">{t('about.aboutBox.coffeeSubtitle')}</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">{t('about.aboutBox.clientsSubtitle')}</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-event"></i>

            <div>
                <h3 className="about__title">24</h3>
                <span className="about__subtitle">{t('about.aboutBox.workExperienceSubtitle')}</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox