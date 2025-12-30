import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className={`contact-content ${contactVisible ? 'animate' : ''}`} ref={contactRef}>
          <div className="contact-info">
            <div className="info-section">
              <h2>Visit Us</h2>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Address</p>
                  <p className="info-value">M.G road, Buno kali tala<br />Chinsurah, Hooghly 712101</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Contact Information</h2>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <p className="info-label">Phone</p>
                  <p className="info-value"><a href="tel:+918240745998">+91 8240745998</a></p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <p className="info-label">Email</p>
                  <p className="info-value"><a href="mailto:crunchjunction2025@gmail.com">crunchjunction2025@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Opening Hours</h2>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Thursday</span>
                  <span className="hours-time">11:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Friday - Saturday</span>
                  <span className="hours-time">11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <h2>Find Us on Map</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132389576!2d-73.98811768459384!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrunchJunction Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

