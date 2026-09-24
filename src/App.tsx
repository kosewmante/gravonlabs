import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import './index.css';

const NAV_LINKS = [
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Work', id: 'work' },
  { label: 'Approach', id: 'approach' },
];

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToAnchor = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="top-nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <Link to="/" aria-label="GravonLabs home">
            <Logo />
          </Link>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={'/#' + item.id}
              className="nav-link"
              onClick={(e) => goToAnchor(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'is-active' : ''}`}
          >
            About
          </Link>
        </div>

        <div className="nav-actions">
          <a href="/#contact" className="btn btn--primary" onClick={(e) => goToAnchor(e, 'contact')}>
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll on route change, but respect in-page anchor deep-links (/#work).
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
