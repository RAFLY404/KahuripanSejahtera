import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-copy">
        <div className="status-pill">
          <span /> Melayani Jabodetabek dan sekitarnya
        </div>
        <h1>
          Barang lama.
          <br />
          <em>Kami Terima.</em>
        </h1>
        <p className="hero-description">
          Kahuripan Sejahtera melayani jual beli barang bekas yang membantu rumah, kantor,
          gudang, restoran, dan bisnis mengelola aset lama dengan cara yang mudah, cepat, dan
          transparan.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#layanan">
            Lihat layanan kami <ArrowRight size={16} />
          </a>
          <a className="text-link" href="#kontak">
            Minta penawaran <span>↗</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="/images/hero-market.svg"
            alt="Ilustrasi berbagai barang bekas yang masih memiliki nilai"
          />
          <div className="hero-image-label">
            <span>Praktis, transparan, dan profesional</span>
            <ArrowUpRight size={15} />
          </div>
        </div>
        <div className="floating-note">
          <strong>01</strong>
          <span>
            Barang berguna.
            <br />
            Dipakai kembali.
          </span>
        </div>
      </div>
    </section>
  );
}
