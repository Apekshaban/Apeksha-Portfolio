import { useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { heroContent, navItems, socialLinks } from '../data/portfolioData'

const socialIcons = {
  github: <FaGithub aria-hidden="true" />,
  linkedin: <FaLinkedinIn aria-hidden="true" />,
  facebook: <FaFacebookF aria-hidden="true" />,
  instagram: <FaInstagram aria-hidden="true" />,
}

function PortfolioHero() {
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <main className="page">
      <header className="topbar">
        <div className="brand-mark">
          <span>{heroContent.brandName}</span>
        </div>

        <nav className="menu" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href="#" className="menu-link">
              {item}
            </a>
          ))}
        </nav>

        <button type="button" className="say-hi-btn">
          {heroContent.contactText}
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="availability-pill">{heroContent.availabilityText}</div>

          <h1 className="headline">
            {heroContent.greeting} <span className="wave">👋</span>
            <br />I am <span className="name-accent">{heroContent.nameInitial}</span>
          </h1>

          <p className="intro">{heroContent.introText}</p>

          <ul className="social-list">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  {socialIcons[social.icon]}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className="download-btn">
            {heroContent.ctaText}
          </button>
        </div>

        <div className="hero-visual" aria-label="Profile image area">
          <div className="bg-circle" />
          {!photoMissing ? (
            <img
              src="/A1.png"
              alt="Apeksha portrait"
              className="profile-photo"
              onError={() => setPhotoMissing(true)}
            />
          ) : (
            <div className="photo-placeholder">Add your photo</div>
          )}
        </div>
      </section>
    </main>
  )
}

export default PortfolioHero