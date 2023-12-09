import React from 'react';
import { useTranslation } from 'react-i18next';
import FranceIcon from '../../assets/flags/france.png';
import EnglishIcon from '../../assets/flags/united-kingdom.png';
import './switcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languageSwitcher" onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}>
      <img src={currentLanguage === 'fr' ? FranceIcon : EnglishIcon} alt={currentLanguage === 'fr' ? 'Français' : 'English'} />
    </div>
  );
};

export default LanguageSwitcher;