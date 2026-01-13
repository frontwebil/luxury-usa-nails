import { useLanguage } from "../contexts/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    {
      url: "/images/our-works/1.jpg",
      alt: "Elegant manicured nails",
    },
    {
      url: "/images/our-works/2.jpg",
      alt: "Beautiful nail design",
    },
    {
      url: "/images/our-works/3.jpg",
      alt: "Professional nail care",
    },
    {
      url: "/images/our-works/4.jpg",
      alt: "Luxury pedicure treatment",
    },
    {
      url: "/images/our-works/5.jpg",
      alt: "Stylish gel nails",
    },
    {
      url: "/images/our-works/6.jpg",
      alt: "Nail polish application",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>{t("gallery.title")}</h2>
          <p>{t("gallery.subtitle")}</p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
              {/* <div className="gallery-overlay">
                <span>{t("gallery.view")}</span>
              </div> */}
            </div>
          ))}
        </div>
        {/* <div className="gallery-button-container">
          <button className="gallery-see-more">
            {t('gallery.seeMore')}
          </button>
        </div> */}
      </div>
    </section>
  );
}
