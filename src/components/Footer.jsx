import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t('contact.visit')}</h4>
            <p>
              <strong>Luxury USA Nails Oppenheim</strong><br />
              {t('contact.address.street')}<br />
              {t('contact.address.city')}<br />
              {t('contact.address.country')}
            </p>
          </div>
          <div className="footer-section">
            <h4>{t('contact.hours')}</h4>
            <p>
              {t('contact.schedule.weekdays')}<br />
              {t('contact.schedule.saturday')}<br />
              {t('contact.schedule.sunday')}
            </p>
          </div>
          <div className="footer-section">
            <h4>{t('contact.contactInfo')}</h4>
            <div className="footer-icons">
              <a href="tel:+4961331234567" className="footer-icon" aria-label="Phone">
                📞 {t('contact.phone')}
              </a>
              <a href="https://t.me/luxuryusanails" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Telegram">
                ✈️ Telegram
              </a>
              <a href="https://instagram.com/luxuryusanails" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Instagram">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luxury USA Nails Oppenheim. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
