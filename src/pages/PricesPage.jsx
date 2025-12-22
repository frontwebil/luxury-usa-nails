import Navigation from "../components/Navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function PricesPage() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      key: "manicure",
      services: [
        "classicManicure",
        "spaManicure",
        "gelManicure",
        "frenchManicure",
      ],
    },
    {
      key: "pedicure",
      services: [
        "classicPedicure",
        "luxurySpaPedicure",
        "gelPedicure",
        "frenchPedicure",
      ],
    },
    {
      key: "extensions",
      services: ["acrylicNew", "acrylicRefill", "gelNew", "gelRefill"],
    },
    {
      key: "nailArt",
      services: [
        "simpleDesign",
        "complexDesign",
        "premiumNailArt",
        "rhinestones",
      ],
    },
    {
      key: "additional",
      services: ["polishRemoval", "nailRepair", "paraffinTreatment", "massage"],
    },
  ];

  return (
    <section id="prices" className="price-list">
      <Navigation />
      <div className="container">
        <div className="section-header">
          <h2>{t("prices.title")}</h2>
          <p>{t("prices.subtitle")}</p>
        </div>
        <div className="price-categories">
          {serviceCategories.map((category, index) => (
            <div key={index} className="price-category">
              <h3 className="category-title">
                {t(`prices.categories.${category.key}`)}
              </h3>
              <div className="price-items">
                {category.services.map((serviceKey, itemIndex) => (
                  <div key={itemIndex} className="price-item">
                    <div className="price-item-info">
                      <h4>{t(`prices.services.${serviceKey}.name`)}</h4>
                      <p>{t(`prices.services.${serviceKey}.description`)}</p>
                    </div>
                    <div className="price-item-cost">
                      {t(`prices.services.${serviceKey}.price`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="price-note">
          <p>{t("prices.note")}</p>
        </div>
      </div>
    </section>
  );
}
