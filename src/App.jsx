import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Destinations from './pages/Destinations'
import Footer from './pages/Footer'
import Header from './pages/Header'
import HeroContent from './pages/HeroContent'
import Partners from './pages/Partners'
import Services from './pages/Servicces'
import SubscribeSection from './pages/SubscribeSection'
import TripBooking from './pages/TripBooking'

function App() {

  return (
    <div className="mx-3 md:mx-20 lg:mx-34">
      <BrowserRouter>
        <Header />
        <HeroContent />
        <Services />
        <Destinations />
        <TripBooking />
        <Partners />
        <SubscribeSection />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
