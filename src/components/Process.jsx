import { Check } from 'lucide-react';

const steps = [
  ['1. Hubungi kami', 'Kirim foto, jenis barang, jumlah, dan lokasi melalui WhatsApp.'],
  [
    '2. Kami cek dan beri penawaran',
    'Tim kami mempelajari kondisi barang dan mendiskusikan harga yang sesuai.',
  ],
  [
    '3. Barang dijemput atau diantar',
    'Setelah sepakat, kami atur jadwal pengambilan dan penyelesaian transaksi.',
  ],
];

export default function Process() {
  return (
    <section className="values" id="proses">
      <div className="values-heading">
        <p className="kicker">Cara kerja</p>
        <h2>
          Ringkas, jelas,
          <br />
          <em>tanpa ribet.</em>
        </h2>
      </div>
      <div className="values-list">
        {steps.map(([title, text]) => (
          <div key={title}>
            <Check size={17} />
            <span>
              <strong>{title}</strong>
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
