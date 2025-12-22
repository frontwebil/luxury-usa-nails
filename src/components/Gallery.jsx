import { useLanguage } from '../contexts/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()

  const images = [
    {
      url: 'https://images.pexels.com/photos/1445446/pexels-photo-1445446.jpeg',
      alt: 'Elegant manicured nails'
    },
    {
      url: 'https://images.pexels.com/photos/1557261/pexels-photo-1557261.jpeg',
      alt: 'Beautiful nail design'
    },
    {
      url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
      alt: 'Professional nail care'
    },
    {
      url: 'https://images.pexels.com/photos/3997366/pexels-photo-3997366.jpeg',
      alt: 'Luxury pedicure treatment'
    },
    {
      url: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg',
      alt: 'Stylish gel nails'
    },
    {
      url: 'https://images.pexels.com/photos/3997360/pexels-photo-3997360.jpeg',
      alt: 'Nail polish application'
    }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>{t('gallery.title')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{t('gallery.view')}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-button-container">
          <button className="gallery-see-more">
            {t('gallery.seeMore')}
          </button>
        </div>
      </div>
    </section>
  )
}
