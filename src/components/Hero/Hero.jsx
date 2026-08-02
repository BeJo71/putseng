import "./Hero.css";

function Hero() {
  return (
    <main id="hem">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">Professionell fönsterputs</p>

          <h1>Rena fönster utan krångel</h1>

          <p className="hero-description">
            Fönsterputs för privatpersoner och företag med fokus på noggrant
            utfört arbete och personlig service.
          </p>

          <div className="hero-actions">
            <a className="call-button" href="tel:+46701234567">
              Ring nu
            </a>

            <a className="contact-button" href="#kontakt">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;