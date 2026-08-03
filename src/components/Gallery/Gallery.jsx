import "./Gallery.css";

import gallery1 from "../../assets/gallery/image4.jpeg";
import gallery2 from "../../assets/gallery/nick-russill-awFiJ8yQLSQ-unsplash.jpg"
import gallery3 from "../../assets/gallery/philippsaal-shibuyasky-4768679_1920.jpg";


function Gallery() {
  const images = [
    {
      src: gallery1,
      alt: "Fönsterputsning vid tidigare arbete",
    },
    {
      src: gallery2,
      alt: "Rengjorda fönster efter utfört arbete",
    },
    {
      src: gallery3,
      alt: "Fönsterputsning på fastighet",
    },
    
  ];

  return (
    <section className="gallery" id="galleri">
      <div className="gallery-container">
        <div className="gallery-heading">
          <p className="gallery-label">Tidigare arbeten</p>
          <h2>Se exempel på utförda jobb</h2>
          <p>
            Här visas några exempel på tidigare arbeten. Fler bilder kommer
            att läggas till efter hand.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;