export default function Services() {
  const services = [
    {
      title: 'Classic Manicure',
      description: 'Traditional nail care with shaping, cuticle care, and polish application',
      price: 'from $35'
    },
    {
      title: 'Luxury Pedicure',
      description: 'Relaxing foot treatment with exfoliation, massage, and premium polish',
      price: 'from $55'
    },
    {
      title: 'Gel Nails',
      description: 'Long-lasting gel polish with a flawless, chip-resistant finish',
      price: 'from $45'
    },
    {
      title: 'Acrylic Extensions',
      description: 'Beautiful nail extensions customized to your desired length and shape',
      price: 'from $65'
    },
    {
      title: 'Nail Art Design',
      description: 'Custom artistic designs to express your unique style',
      price: 'from $20'
    },
    {
      title: 'Spa Manicure',
      description: 'Premium treatment with exfoliation, mask, and relaxing hand massage',
      price: 'from $50'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional nail care tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
