const reviews = [
  {
    id: 1,
    name: "María Rodríguez",
    text: "El mejor café de Turrialba. El ambiente es elegante y el servicio fue increíble.",
  },
  {
    id: 2,
    name: "Daniel Solano",
    text: "Los postres artesanales son espectaculares. Definitivamente volveré cada semana.",
  },
  {
    id: 3,
    name: "Andrea Jiménez",
    text: "Una experiencia premium. Excelente atención, buen café y un lugar precioso.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <span className="section-tag">RESEÑAS</span>
        <h2>Lo que dicen nuestros clientes</h2>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article key={review.id} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"{review.text}"</p>
              <h4>{review.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;