import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { companyHighlights } from './data/siteContent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ItemGallery from './components/ItemGallery';
import Process from './components/Process';
import Services from './components/Services';
import './styles.css';

function Highlights() {
  return (
    <section className="value-strip">
      {companyHighlights.map(([number, label]) => (
        <div key={number}>
          <strong>{number}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <ItemGallery />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
