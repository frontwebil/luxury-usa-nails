export default function PriceList() {
  const services = [
    {
      category: 'Maniküre',
      items: [
        { name: 'Klassische Maniküre', price: '35€', description: 'Nägel feilen, Nagelhaut pflegen, polieren' },
        { name: 'Spa Maniküre', price: '50€', description: 'Inklusive Peeling, Maske und Handmassage' },
        { name: 'Gel Maniküre', price: '45€', description: 'Langanhaltender Gel-Lack' },
        { name: 'French Maniküre', price: '40€', description: 'Klassischer French-Look' }
      ]
    },
    {
      category: 'Pediküre',
      items: [
        { name: 'Klassische Pediküre', price: '45€', description: 'Nägel schneiden, feilen, Hornhaut entfernen' },
        { name: 'Luxus Spa Pediküre', price: '65€', description: 'Inklusive Peeling, Maske und Fußmassage' },
        { name: 'Gel Pediküre', price: '55€', description: 'Mit langhaltendem Gel-Lack' },
        { name: 'French Pediküre', price: '50€', description: 'Eleganter French-Style' }
      ]
    },
    {
      category: 'Nagelverlängerung',
      items: [
        { name: 'Acryl Nägel - Neuanlage', price: '65€', description: 'Komplette Neuanlage mit Acryl' },
        { name: 'Acryl Nägel - Auffüllung', price: '50€', description: 'Auffüllen bestehender Acrylnägel' },
        { name: 'Gel Nägel - Neuanlage', price: '70€', description: 'Komplette Neuanlage mit Gel' },
        { name: 'Gel Nägel - Auffüllung', price: '55€', description: 'Auffüllen bestehender Gelnägel' }
      ]
    },
    {
      category: 'Nageldesign',
      items: [
        { name: 'Einfaches Design', price: '15€', description: 'Pro Hand - Streifen, Punkte' },
        { name: 'Aufwendiges Design', price: '25€', description: 'Pro Hand - Komplexe Muster' },
        { name: 'Nail Art Premium', price: '35€', description: 'Pro Hand - Kunstvolle Designs' },
        { name: 'Strass & Verzierungen', price: 'ab 5€', description: 'Je nach Aufwand' }
      ]
    },
    {
      category: 'Zusätzliche Services',
      items: [
        { name: 'Nagellack entfernen', price: '10€', description: 'Gel oder normaler Lack' },
        { name: 'Nagelreparatur', price: '5€', description: 'Pro Nagel' },
        { name: 'Paraffinbehandlung', price: '20€', description: 'Für Hände oder Füße' },
        { name: 'Hand- oder Fußmassage', price: '15€', description: '15 Minuten' }
      ]
    }
  ]

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
                      <p>{item.description}</p>
                    </div>
                    <div className="price-item-cost">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="price-note">
          <p>Alle Preise verstehen sich inklusive Mehrwertsteuer. Individuelle Beratung und Preisanpassungen nach Absprache möglich.</p>
        </div>
      </div>
    </section>
  )
}
