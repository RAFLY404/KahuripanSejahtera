import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigationLinks } from '../data/siteContent';
import { whatsappUrl } from '../utils/whatsapp';
import Brand from './Brand';
import WhatsAppButton from './WhatsAppButton';

export default function Header({ open, setOpen }) {
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Brand />

      <nav className={open ? 'desktop-nav open' : 'desktop-nav'} aria-label="Navigasi utama">
        {navigationLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="mobile-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
          WhatsApp <ArrowUpRight size={14} />
        </a>
      </nav>

      <div className="header-actions">
        <a className="header-text-link" href="#tentang">
          Profil perusahaan
        </a>
        <WhatsAppButton className="header-button">
          WhatsApp <ArrowUpRight size={14} />
        </WhatsAppButton>
      </div>

      <button
        className="menu-toggle"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
