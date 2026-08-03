import "./Services.css";

function Services() {
  const services = [
    {
      title: "Privatpe rsoner",
      description:
        "Noggrann fönsterputs för villor, lägenheter och fritidshus.",
    },
    
    
  ];

  return (
    <section className="services" id="tjanster">
      <div className="services-container">
        <p className="services-label">Våra tjänster</p>

        <h2>Fönsterputs anpassad efter dina behov</h2>

        <p className="services-intro">
          Vi hjälper både privatpersoner och företag med rena fönster och
          personlig service.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;