import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>{t('about.title')}</h2>
              <p>{t('about.subtitle')}</p>
            </div>
            <div className="about-description">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
              <p>{t('about.text3')}</p>
            </div>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>{t('about.features.premium.title')}</h4>
                  <p>{t('about.features.premium.description')}</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>{t('about.features.experts.title')}</h4>
                  <p>{t('about.features.experts.description')}</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>{t('about.features.hygiene.title')}</h4>
                  <p>{t('about.features.hygiene.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
