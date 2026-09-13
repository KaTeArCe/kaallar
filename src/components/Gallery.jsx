import { useState, useEffect } from "react";

import cafe from "../assets/images/cafe.jpg";
import bufete from "../assets/images/bufete.jpg";
import salon from "../assets/images/salon.jpg";
import tienda from "../assets/images/tienda.jpg";

const images = [
  { id: 1, src: cafe, alt: "Café y latte" },
  { id: 2, src: salon, alt: "Interior del café" },
  { id: 3, src: tienda, alt: "Postres y vitrina" },
  { id: 4, src: bufete, alt: "Granos de café" },
];

function Gallery() {
  const [index, setIndex] = useState(null);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (index === null) return;

      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <section className="gallery">
      <div className="container">
        <span className="section-tag">GALERÍA</span>
        <h2>Momentos de Café Luna</h2>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="gallery-card"
              onClick={() => setIndex(i)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {index !== null && (
        <div className="lightbox" onClick={() => setIndex(null)}>

          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ❮
          </button>

          <img
            src={images[index].src}
            alt={images[index].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ❯
          </button>

          <span className="close" onClick={() => setIndex(null)}>
            ×
          </span>

          <div className="counter">
            {index + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;