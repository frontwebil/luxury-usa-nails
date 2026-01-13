export default function PriceList() {
  const services = [
    {
      category: "Nagelmodellage / Design",
      items: [
        { name: "Natur Pink / Make-up", price: "35–40 €" },
        { name: "Natur Pink Clear", price: "30–35 €" },
        { name: "Farbe", price: "37–42 €" },
        { name: "Farbe mit Glitzer", price: "40–45 €" },
        { name: "Weißer Verlauf", price: "37–42 €" },
        { name: "Ombre Farbe", price: "42–47 €" },
        { name: "Cat Eyes", price: "42–47 €" },
        { name: "French Weiß", price: "40–45 €" },
        { name: "French Farbe", price: "43–48 €" },
        { name: "Chrom", price: "+10 €" },
      ],
    },
    {
      category: "✋ Maniküre",
      items: [
        { name: "Maniküre", price: "15 €" },
        { name: "Maniküre mit Shellac", price: "37 €" },
        { name: "Nur Shellac", price: "27 €" },
      ],
    },
    {
      category: "🦶 Pediküre (Füße)",
      items: [
        { name: "Nur Pediküre", price: "33 €" },
        { name: "Pediküre mit Farbe", price: "45 €" },
        { name: "Pediküre mit French", price: "47 €" },
        { name: "Pediküre mit Acryl", price: "58 €" },
        { name: "Nur Shellac (Füße)", price: "27 €" },
      ],
    },
  ];

  return (
    <section id="prices" className="price-list">
      <div className="container">
        <div className="section-header">
          <h2>Preisliste</h2>
          <p>Unsere Services und Preise im Überblick</p>
        </div>

        <div className="price-categories">
          {services.map((category, index) => (
            <div key={index} className="price-category">
              <h3 className="category-title">{category.category}</h3>

              <div className="price-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="price-item">
                    <div className="price-item-info">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="price-item-cost">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="price-note">
          <p>
            Alle Preise verstehen sich inklusive Mehrwertsteuer. Individuelle
            Beratung und Preisanpassungen nach Absprache möglich.
          </p>
        </div>
      </div>
    </section>
  );
}
