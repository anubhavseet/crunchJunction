import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Home.css'

// Helper function to get image path for a dish
const getDishImage = (dishName) => {
  const imageMap = {
    'Chicken Steam Momo': '/images/chicken_steam_momo.png',
    'Veg Steam Momo': '/images/veg_steam_momo.png',
    'Paneer Steam Momo': '/images/Panner_steam_momo.png',
    'Veg Cheese Momo': '/images/Veg_cheese_momo.png',
    'Chicken Cheese Momo': '/images/chicken_cheese_momo.png',
    'Mutton Momo': '/images/mutton_momo.png',
    'Fish Momo': '/images/fish_momo.png',
    'Prawn Momo': '/images/prawn_momo.png',
    'Gandharaj Chicken Momo': '/images/Gandharaj_chicken_momo.png',
    'Sweet Corn Cheese Momo': '/images/Sweet_Corn_Cheese_momo.png',
    'Fish Fry': '/images/Fish_fry.png',
    'Fish Finger': '/images/Fish_finger.png',
    'Fish Ball': '/images/Fish_ball.png',
    'Fish Butter Fry': '/images/Fish_butter_fry.png',
    'Paneer Pasinda': '/images/Panner_Pasinda.png',
    'Paneer Satte': '/images/Panner_Satte.png',
    'Chicken Cutlet': '/images/Chicken_Cutlet.png',
    'Chicken Satte': '/images/Chicken_satte.png',
    'Chicken Cheese Ball': '/images/Chicken_cheese_ball.png',
    'Chicken Wings': '/images/Chicken_wings.png',
    'Chicken Leg': '/images/Chicken_leg.png',
    'Chicken Kabul Roll': '/images/Chicken_kabul_roll.png',
    'Egg Devil': '/images/egg_devil.png',
    'Veg Spring Roll': '/images/veg_spring_roll.png',
    'Chicken & Paneer Spring Roll': '/images/Chicken_and_panner_spring_roll.png',
    'Cheese Chicken Spring Roll': '/images/Cheese_chicken_spring_roll.png',
    'Chicken Burger Patty': '/images/Chicken_buger_patty.png',
    'Veg Burger Patty': '/images/veg_Burger_patty.png',
    'Pizza Bread': '/images/Pizza_bread.png',
    'Chicken Taipo': '/images/Chicken taipo.png'
  }
  return imageMap[dishName] || '/images/crunch-junction-graphic.png'
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuRef, menuVisible] = useScrollAnimation({ threshold: 0.1 })
  const [featuredRef, featuredVisible] = useScrollAnimation({ threshold: 0.2 })
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.1 })
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

  const heroSlides = [
    {
      id: 1,
      title: 'Crunch Junction - India Ka Crunchy Food',
      image: getDishImage('Gandharaj Chicken Momo')
    },
    {
      id: 2,
      title: 'Delicious Momos & More',
      image: getDishImage('Chicken Cheese Momo')
    },
    {
      id: 3,
      title: 'Fresh & Crunchy Every Bite',
      image: getDishImage('Chicken Wings')
    },
    {
      id: 4,
      title: 'Premium Quality Food',
      image: getDishImage('Fish Fry')
    }
  ]

  const featuredItems = [
    {
      id: 1,
      name: 'Gandharaj Chicken Momo',
      image: getDishImage('Gandharaj Chicken Momo')
    },
    {
      id: 2,
      name: 'Fish Fry & Fish Finger',
      image: getDishImage('Fish Fry')
    },
    {
      id: 3,
      name: 'Paneer Specials',
      image: getDishImage('Paneer Satte')
    },
    {
      id: 4,
      name: 'Chicken Delights',
      image: getDishImage('Chicken Wings')
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Best crunchy food in town! The burgers are always fresh and the service is amazing.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      text: 'Love the variety here. Perfect for a quick lunch or dinner with friends.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      text: 'CrunchJunction never disappoints. The quality is consistent and prices are great!',
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleCategoryChange = (categoryId) => {
    setIsTransitioning(true)
    setActiveCategory(categoryId)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 400)
  }

  const scrollToSection = (sectionId) => {
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
    <div className="home">
      {/* Hero Slider */}
      <section id="home" className="hero-slider">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              <div className="hero-slide-content">
                <h1 className="hero-slide-title">{slide.title}</h1>
                <button className="btn btn-primary" onClick={() => scrollToSection('menu')}>
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-content marquee-text">
            <span>CrunchJunction ⠀⠀✪</span>
            <span>India Ka Crunchy Food ⠀⠀✪</span>
            <span>CrunchJunction ⠀⠀✪</span>
            <span>India Ka Crunchy Food ⠀⠀✪</span>
            <span>CrunchJunction ⠀⠀✪</span>
            <span>India Ka Crunchy Food ⠀⠀✪</span>
            <span>CrunchJunction ⠀⠀✪</span>
            <span>India Ka Crunchy Food ⠀⠀✪</span>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className={`featured-section ${featuredVisible ? 'animate' : ''}`} ref={featuredRef}>
        <div className="container">
          <h2 className="section-title featured-title">
            <span className="title-line-1">Taste the</span>
            <span className="title-line-2 accent-text">Crunchy Magic!</span>
            <span className="title-line-3">Discover Our Signature Delights</span>
          </h2>
          <div className="featured-grid">
            {featuredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`featured-card ${featuredVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="featured-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="featured-overlay"></div>
                </div>
                <div className="featured-content">
                  <h3>{item.name}</h3>
                  <button className="btn btn-secondary btn-sm" onClick={() => scrollToSection('menu')}>
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrapper">
            <button className={`btn btn-primary view-all-btn ${featuredVisible ? 'animate' : ''}`} onClick={() => scrollToSection('menu')}>
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section id="menu" className={`menu-section ${menuVisible ? 'animate' : ''}`} ref={menuRef}>
        <div className="container">
          <div className="menu-hero-inline sticky-title">
            <h2 className="section-title menu-title">
              <span className="title-part-1">Explore Our</span>
              <span className="title-part-2 accent-text">Delicious Menu</span>
              <span className="title-part-3">Every Bite is a Celebration!</span>
            </h2>
          </div>
          
          <div className="menu-categories">
            {[
              { id: 'all', name: 'All Items' },
              { id: 'momos', name: 'Momos' },
              { id: 'chicken', name: 'Chicken' },
              { id: 'fish', name: 'Fish' },
              { id: 'paneer', name: 'Paneer' },
              { id: 'snacks', name: 'Snacks & Rolls' }
            ].map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className={`menu-grid ${isTransitioning ? 'transitioning' : ''}`}>
            {(() => {
              const allItems = [
                // Momos
                { name: 'Chicken Steam Momo', description: 'Delicious steamed chicken momos served with tangy dipping sauce', price: '₹50-55', category: 'momos', image: getDishImage('Chicken Steam Momo') },
                { name: 'Veg Steam Momo', description: 'Fresh vegetable momos steamed to perfection with soup and dipping sauces', price: '₹40-45', category: 'momos', image: getDishImage('Veg Steam Momo') },
                { name: 'Paneer Steam Momo', description: 'Soft paneer filled momos with orange-red dipping sauce', price: '₹50-55', category: 'momos', image: getDishImage('Paneer Steam Momo') },
                { name: 'Veg Cheese Momo', description: 'Golden-brown fried momos with cheese filling and special sauce', price: '₹60-65', category: 'momos', image: getDishImage('Veg Cheese Momo') },
                { name: 'Chicken Cheese Momo', description: 'Mixed steamed and fried momos with cheese and chicken filling', price: '₹70', category: 'momos', image: getDishImage('Chicken Cheese Momo') },
                { name: 'Mutton Momo', description: 'Crispy fried mutton momos with chunky chutney', price: '₹80', category: 'momos', image: getDishImage('Mutton Momo') },
                { name: 'Fish Momo', description: 'Golden-brown fried fish momos with yellowish-green dipping sauce', price: '₹70', category: 'momos', image: getDishImage('Fish Momo') },
                { name: 'Prawn Momo', description: 'Crispy fried prawn momos with orange-red dipping sauce', price: '₹75', category: 'momos', image: getDishImage('Prawn Momo') },
                { name: 'Gandharaj Chicken Momo', description: 'Steamed chicken momos with special gandharaj flavor and dipping sauce', price: '₹60', category: 'momos', image: getDishImage('Gandharaj Chicken Momo') },
                { name: 'Sweet Corn Cheese Momo', description: 'Fresh steamed momos with sweet corn and cheese filling', price: '₹70', category: 'momos', image: getDishImage('Sweet Corn Cheese Momo') },
                // Fish Items
                { name: 'Fish Fry', description: 'Golden-brown fried fish served with dipping sauce and fresh garnish', price: '₹80', category: 'fish', image: getDishImage('Fish Fry') },
                { name: 'Fish Finger', description: 'Crispy fish fingers served with ketchup and creamy dipping sauce', price: '₹30', category: 'fish', image: getDishImage('Fish Finger') },
                { name: 'Fish Ball', description: 'Golden-brown spherical fish balls on skewers with herbs and spices', price: '₹20', category: 'fish', image: getDishImage('Fish Ball') },
                { name: 'Fish Butter Fry', description: 'Crispy butter-fried fish pieces with textured coating', price: '₹80', category: 'fish', image: getDishImage('Fish Butter Fry') },
                // Paneer Items
                { name: 'Paneer Pasinda', description: 'Breaded and fried paneer pieces with creamy dipping sauce', price: '₹30', category: 'paneer', image: getDishImage('Paneer Pasinda') },
                { name: 'Paneer Satte', description: 'Grilled paneer skewers with bell peppers, marinated and charred', price: '₹45', category: 'paneer', image: getDishImage('Paneer Satte') },
                // Chicken Items
                { name: 'Chicken Cutlet', description: 'Golden-brown fried chicken cutlets with fries and dipping sauce', price: '₹30', category: 'chicken', image: getDishImage('Chicken Cutlet') },
                { name: 'Chicken Satte', description: 'Grilled chicken skewers with bell peppers, herbs, and spices', price: '₹45', category: 'chicken', image: getDishImage('Chicken Satte') },
                { name: 'Chicken Cheese Ball', description: 'Breaded chicken cheese balls with creamy filling and dipping sauce', price: '₹25', category: 'chicken', image: getDishImage('Chicken Cheese Ball') },
                { name: 'Chicken Wings', description: 'Crispy golden-brown fried chicken wings', price: '₹50', category: 'chicken', image: getDishImage('Chicken Wings') },
                { name: 'Chicken Leg', description: 'Roasted chicken legs with lemon wedges and fresh herbs', price: '₹90', category: 'chicken', image: getDishImage('Chicken Leg') },
                { name: 'Chicken Kabul Roll', description: 'Crispy golden rolls with savory chicken filling and dipping sauces', price: '₹45', category: 'chicken', image: getDishImage('Chicken Kabul Roll') },
                // Snacks
                { name: 'Egg Devil', description: 'Deep-fried breaded eggs with spiced filling and tangy sauce', price: '₹25', category: 'snacks', image: getDishImage('Egg Devil') },
                { name: 'Veg Spring Roll', description: 'Golden-brown crispy spring rolls with vegetable filling', price: '₹40', category: 'snacks', image: getDishImage('Veg Spring Roll') },
                { name: 'Chicken & Paneer Spring Roll', description: 'Large wraps with chicken, paneer, lettuce, and creamy sauce', price: '₹55', category: 'snacks', image: getDishImage('Chicken & Paneer Spring Roll') },
                { name: 'Cheese Chicken Spring Roll', description: 'Crispy fried spring rolls with chicken and cheese filling', price: '₹80', category: 'snacks', image: getDishImage('Cheese Chicken Spring Roll') },
                { name: 'Chicken Burger Patty', description: 'Grilled chicken burger patties with herbs and spices', price: '₹22', category: 'snacks', image: getDishImage('Chicken Burger Patty') },
                { name: 'Veg Burger Patty', description: 'Vegetable burger patties with peas and mixed vegetables', price: '₹18', category: 'snacks', image: getDishImage('Veg Burger Patty') },
                { name: 'Pizza Bread', description: 'Bread topped with melted cheese, pepperoni, and herbs', price: '₹20', category: 'snacks', image: getDishImage('Pizza Bread') },
                { name: 'Chicken Taipo', description: 'Steamed bun with chicken filling and special sauce', price: '₹35', category: 'snacks', image: getDishImage('Chicken Taipo') }
              ]
              
              const filteredItems = activeCategory === 'all' 
                ? allItems 
                : allItems.filter(item => item.category === activeCategory)
              
              return filteredItems.map((item, index) => (
                <div 
                  key={`${item.name}-${activeCategory}`} 
                  className={`menu-item-card ${isTransitioning ? 'fade-out' : 'fade-in'}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="menu-item-content">
                    <h3>{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <p className="menu-item-price">{item.price}</p>
                  </div>
                </div>
              ))
            })()}
          </div>
        </div>
      </section>

      {/* Stats Section - Why Choose Us */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Why <span className="accent-text">Choose</span> Us</h2>
          <p className="section-subtitle">Join a network of successful franchise partners across India and build your profitable business with our proven model.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <h2 className="stat-number">25-30%</h2>
              <h3 className="stat-title">Average ROI</h3>
              <p className="stat-description">Proven return on investment</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <h2 className="stat-number">~500+</h2>
              <h3 className="stat-title">Daily Footfall</h3>
              <p className="stat-description">Average per outlet</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <h2 className="stat-number">₹15L</h2>
              <h3 className="stat-title">Investment Range</h3>
              <p className="stat-description">Starting investment</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <h2 className="stat-number">6-8</h2>
              <h3 className="stat-title">Proven Strategies</h3>
              <p className="stat-description">With organized system</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about-section ${aboutVisible ? 'animate' : ''}`} ref={aboutRef}>
        <div className="container">
          <div className="about-hero-section">
            <h2 className="section-title">Our <span className="accent-text">Inspiring</span> Journey</h2>
          </div>
          
          <div className="about-content">
            <div className="about-graphic">
              <img src="/images/crunch-junction-graphic.png" alt="Crunch Junction" />
            </div>
            <div className="about-year-badge">
              <span className="year-text">Since 2019'</span>
            </div>
            <div className="about-story-text">
              <p>
                Our story is one of passion, people, and purpose. From the vibrant lanes of the city center 
                to neighborhoods across the region, we've grown into multiple locations - each one a joyful 
                step in our journey to connect hearts, build trust, and create something truly meaningful together.
              </p>
            </div>
            <button className="btn btn-secondary">Read More</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`testimonials-section ${testimonialsVisible ? 'animate' : ''}`} ref={testimonialsRef}>
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {[
              {
                id: 1,
                name: 'Sarah Johnson',
                location: 'City Center',
                text: 'Best crunchy food in town! The burgers are always fresh and the service is amazing.',
                rating: 5,
                type: 'customer'
              },
              {
                id: 2,
                name: 'Mike Chen',
                location: 'Downtown',
                text: 'Love the variety here. Perfect for a quick lunch or dinner with friends.',
                rating: 5,
                type: 'customer'
              },
              {
                id: 3,
                name: 'Emily Rodriguez',
                location: 'Westside',
                text: 'CrunchJunction never disappoints. The quality is consistent and prices are great!',
                rating: 5,
                type: 'customer'
              },
              {
                id: 4,
                name: 'David Park',
                location: 'Partner',
                text: 'Becoming a CrunchJunction partner was the best decision. Strong support and consistent quality!',
                rating: 5,
                type: 'partner'
              }
            ].map(testimonial => (
              <div key={testimonial.id} className={`testimonial-card ${testimonial.type}`}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.location}</p>
                    {testimonial.type === 'partner' && <span className="partner-badge">CrunchJunction Partner</span>}
                  </div>
                </div>
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact-section ${contactVisible ? 'animate' : ''}`} ref={contactRef}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to start your CrunchJunction journey? Whether you want to order or partner with us, we're here to help!</p>
          <div className="contact-content-wrapper">
            <div className="contact-info-section">
              <div className="info-section">
                <h3>Visit Us</h3>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <p className="info-label">Address</p>
                    <p className="info-value">123 Food Street<br />City Center, State 12345</p>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-value"><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value"><a href="mailto:info@crunchjunction.com">info@crunchjunction.com</a></p>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Opening Hours</h3>
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

            <div className="contact-form-section">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Interest</option>
                    <option value="order">Place Order</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Customer Feedback</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
