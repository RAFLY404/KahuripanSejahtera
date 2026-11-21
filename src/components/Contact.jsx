import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section className="contact section-pad" id="kontak">
      <div>
        <p className="kicker">Hubungi kami</p>
        <h2>
          Punya barang
          <br />
          <em>untuk dijual?</em>
        </h2>
      </div>
      <div className="contact-copy">
        <p>
          Ceritakan barang yang ingin Anda jual. Kirim foto dan detail singkat melalui WhatsApp,
          lalu tim Kahuripan Sejahtera akan membantu dari sana.
        </p>
        <WhatsAppButton message={WHATSAPP_TEMPLATES.sell} location="contact">
          Mulai via WhatsApp
        </WhatsAppButton>
        <small>Template pesan sudah disiapkan agar lebih cepat.</small>
      </div>
    </section>
  );
}
