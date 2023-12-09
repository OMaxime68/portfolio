import React from 'react';
import "./home.css";
import Profil1 from "../../assets/profiles/profil-1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img className="home__img" src={Profil1} alt={t('home.intro.name')} />
        <h1 className="home__name">{t('home.intro.name')}</h1>
        <span className="home__education" dangerouslySetInnerHTML={{ __html: t('home.intro.education') }} />

        <HeaderSocials />

        <a href="#contact" className="btn">{t('home.hireMeButton')}</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}

export default Home;