import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../utils/whatsapp';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand light />
        <p>
          Setiap barang
          <br />
          masih punya nilai.
        </p>
        <div className="footer-links">
          <a href="#tentang">Tentang kami</a>
          <a href="#layanan">Layanan</a>
          <a href="#proses">Cara kerja</a>
          <a
            href={whatsappUrl('Halo Kahuripan Sejahtera, saya ingin bertanya.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Kahuripan Sejahtera</span>
        <span>Jual beli barang bekas Jabodetabek</span>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={13} /> Chat WhatsApp
        </a>
      </div>
    </footer>
  );
}
