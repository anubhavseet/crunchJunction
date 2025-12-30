import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const About = () => {
  const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [missionRef, missionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="about-subtitle">From a simple idea to your favorite crunch destination</p>
        </div>
      </div>

      <div className="container">
      <section className={`about-story ${storyVisible ? 'animate' : ''}`} ref={storyRef}>
        <div className="story-content">
            <h2>Welcome to CrunchJunction</h2>
            <p>
              CrunchJunction was born from a simple passion: creating the perfect crunch in every bite. 
              Founded in 2018, we started as a small food truck with a big dream - to serve fast food 
              that doesn't compromise on quality, freshness, or taste.
            </p>
            <p>
              What began as a weekend venture quickly grew into a beloved local spot. Our commitment 
              to using fresh, high-quality ingredients and our unique approach to creating that perfect 
              crispy texture in every dish set us apart from the rest.
            </p>
            <p>
              Today, CrunchJunction continues to serve our community with the same dedication to 
              excellence. We believe that great food should be accessible to everyone, which is why 
              we've maintained our promise of premium quality at affordable prices.
            </p>
          </div>
        </section>

      <section className={`about-values ${valuesVisible ? 'animate' : ''}`} ref={valuesRef}>
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Freshness First</h3>
              <p>
                We source our ingredients daily from trusted local suppliers. Every dish is prepared 
                fresh to order, ensuring maximum flavor and nutrition.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality Assurance</h3>
              <p>
                From our kitchen to your plate, we maintain the highest standards of hygiene and 
                food safety. Your health and satisfaction are our top priorities.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">👨‍🍳</div>
              <h3>Passion for Taste</h3>
              <p>
                Our chefs are passionate about creating bold, memorable flavors. Every recipe is 
                carefully crafted and tested to deliver the perfect balance of taste and texture.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community Focus</h3>
              <p>
                We're more than just a restaurant - we're part of the community. We're committed 
                to giving back and creating a welcoming space for everyone.
              </p>
            </div>
          </div>
        </section>

      <section className={`about-mission ${missionVisible ? 'animate' : ''}`} ref={missionRef}>
        <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To provide our customers with the freshest, crunchiest, and most delicious fast food 
              experience while maintaining the highest standards of quality, hygiene, and customer service. 
              We strive to be the go-to destination for anyone craving that perfect crunch.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

