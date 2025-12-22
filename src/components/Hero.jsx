import { useLanguage } from '../contexts/LanguageContext'
import Navigation from './Navigation'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <Navigation />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Luxury USA Nails
          <span className="hero-subtitle">{t('hero.subtitle')}</span>
        </h1>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        <button className="hero-cta" onClick={scrollToContact}>
          {t('hero.cta')}
        </button>
      </div>
    </section>
  )
}
