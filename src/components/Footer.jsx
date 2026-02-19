import './Footer.css'

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      window.location.hash = sectionId
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/images/crunch_junction_logo_3d.svg" alt="CrunchJunction" className="footer-logo" />
            <p>Fresh, crunchy, and delicious fast food. Premium quality at affordable prices.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <h4 className='info-label'>Olivento Pvt Ltd</h4>
            <ul>
              <li>📍 M.G road, Buno kali tala, Chinsurah, Hooghly 712101</li>
              <li>📞 +91 8240745998</li>
              <li>✉️ crunchjunction2025@gmail.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <ul>
              <li>Mon - Thu: 11:00 AM - 10:00 PM</li>
              <li>Fri - Sat: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CrunchJunction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

