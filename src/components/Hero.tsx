import Button from './Button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            <em>Transparență și încredere</em>
            <br />
            între
            <br />
            <em>chiriași și proprietari</em>
          </h1>
          <p className="hero-subtitle">
            Răsfoiește anunțurile, discută în siguranță și programează vizionări.
            <br />
            Totul într-un singur loc.
          </p>
          <div className="hero-cta">
            <a href="#browse" className="no-underline">
              <Button variant="secondary">Alătură-te</Button>
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Product preview area">
          <div className="media-placeholder">
            Will add a short demo video or a screenshot carousel here
          </div>
        </div>
      </div>
    </section>
  )
}
