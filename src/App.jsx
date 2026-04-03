import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// İmport komponentlər
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// İmport səhifələr
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import VisionMission from './pages/VisionMission';
import Mission from './pages/Mission';
import Values from './pages/Values';
import Events from './pages/Events';
import Reviews from './pages/Reviews';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Management from './pages/Management';
import Partners from './pages/Partners';
import Structure from './pages/Structure';
import Gallery from './pages/Gallery';
import Training from './pages/Training';
import Scholarships from './pages/Scholarships';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Address from './pages/Address'; // <-- ДОБАВЛЕН ИМПОРТ ADDRESS
import NotFound from './pages/NotFound';
import Mentors from './pages/Mentors';

// İmport loqo
import logoImg from './assets/logo.png'; 
import './App.css';

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = logoImg;
    document.getElementsByTagName('head')[0].appendChild(link);
    document.title = "GÜVƏN Təhsil Fondu";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} /> 
          <Route path="/values" element={<Values />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/management" element={<Management />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/training" element={<Training />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/address" element={<Address />} /> {/* <-- НОВЫЙ МАРШРУТ */}
          <Route path="/vision" element={<VisionMission />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

