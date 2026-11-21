import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/siteContent';
import WhatsAppButton from './WhatsAppButton';

export default function Services() {
  return (
    <section className="services section-pad" id="layanan">
      <div className="section-heading">
        <div>
          <p className="kicker">Layanan kami</p>
          <h2>
            Solusi untuk
            <br />
            <em>barang Anda.</em>
          </h2>
        </div>
        <div className="section-intro">
          <p>
            Dari barang rumah tangga hingga aset bisnis, kami membantu Anda mendapatkan nilai yang
            wajar tanpa proses yang berbelit.
          </p>
          <WhatsAppButton className="section-button">Hubungi kami</WhatsAppButton>
        </div>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ArrowUpRight size={19} />
          </article>
        ))}
      </div>
    </section>
  );
}
