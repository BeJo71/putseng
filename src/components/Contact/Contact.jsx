import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-label">Kontakt</p>
          <h2>Skicka en förfrågan</h2>
          <p>
            Fyll i formuläret så återkommer vi så snart som möjligt.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefonnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Adress</label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
            />
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="message">Meddelande</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
            />
          </div>

          <button className="submit-button" type="submit">
            Skicka förfrågan
          </button>
        </form>

        <div className="direct-contact">
          <p>Du kan också kontakta oss direkt:</p>

          <div className="direct-contact-links">
            <a href="tel:+46701234567">Ring nu</a>
            <a href="mailto:kontakt@putseng.se">
              Skicka e-post
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;