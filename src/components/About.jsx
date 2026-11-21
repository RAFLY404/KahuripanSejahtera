import WhatsAppButton from './WhatsAppButton';

export default function About() {
  return (
    <section className="about section-pad" id="tentang">
      <div className="about-image">
        <img
          src="/images/about-indonesia.jpg"
          alt="Penyimpanan aset dan furniture bekas di Jakarta"
        />
        <span>Bergerak bersama masyarakat</span>
      </div>
      <div className="about-copy">
        <p className="kicker">Tentang Kahuripan Sejahtera</p>
        <h2>
          Mengubah barang tidak terpakai menjadi <em>kesempatan.</em>
        </h2>
        <p>
          Kami melayani Borongan jual beli barang bekas seperti freezer,genset,Besi tua,kuningan,
          almunium, tembaga, kabel bekas, alat-alat resto, alat caffe, dan komputer bekas, server,
          UPS, printer, monitor, logam, dan barang bekas lainnya dalam berbagai kondisi apapun. Kami
          menerima segala macam barang bekas, kantor, sekolah, mall, rumah sakit dan perumahan,
          restaurant, gudang, pabrik, yayasan, warnet di wilayah JABODETABEK dan sekitarnya
        </p>
        <p>
          Kahuripan Sejahtera hadir sebagai mitra yang membantu individu dan bisnis menjual barang
          bekas secara lebih mudah, aman, dan bertanggung jawab.
        </p>
        <div className="signature">
          <span className="signature-line" />
          <span>
            Barang apapun kami terima
            <br />
            <small>Kahuripan Sejahtera</small>
          </span>
        </div>
        <WhatsAppButton className="section-button">Hubungi kami</WhatsAppButton>
      </div>
    </section>
  );
}
