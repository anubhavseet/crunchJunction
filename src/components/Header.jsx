import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'about', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-left-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            <img src="/images/crunch_junction_logo_3d.svg" alt="CrunchJunction" className="logo-image-side" />
          </a>
        </div>
        
        <nav className={`nav-left ${isMobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#menu" 
            className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'menu')}
          >
            Menu
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            Our Story
          </a>
          
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>
        
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="logo-text"><span className="logo-accent">Crunch</span><span className="logo-junction">Junction</span></span>
        </a>
        
        <div className="header-right">
        
          <button className="btn btn-primary" onClick={(e) => handleNavClick(e, 'contact')}>
            Get Franchise
          </button>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="mobile-header-right">
          <button className="btn btn-primary btn-sm" onClick={(e) => {
            handleNavClick(e, 'contact')
            setIsMobileMenuOpen(false)
          }}>
            Order Now
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

