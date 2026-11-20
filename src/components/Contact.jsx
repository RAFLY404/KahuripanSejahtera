import WhatsAppButton from './WhatsAppButton';

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
        <WhatsAppButton>Mulai via WhatsApp</WhatsAppButton>
        <small>Respons cepat pada jam operasional.</small>
      </div>
    </section>
  );
}
