import React from 'react'
import { useTranslation } from 'react-i18next';

const HeaderSocials = () => {
  const { t } = useTranslation();

  return (
    <div className="home__socials">
        <a href="https://github.com/OMaxime68" className="home__social-link" target='_blank' rel="noreferrer">
        <i class="fa-brands fa-github"></i>
        </a>

        <a href={t('home.socials.linkedinUrl')} className="home__social-link" target='_blank' rel="noreferrer">
        <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}

export default HeaderSocials