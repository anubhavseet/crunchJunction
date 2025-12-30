import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import './App.css'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Handle hash routing
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Handle initial hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

