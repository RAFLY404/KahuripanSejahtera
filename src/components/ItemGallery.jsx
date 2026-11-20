import { itemGallery } from '../data/siteContent';

export default function ItemGallery() {
  return (
    <section className="item-gallery section-pad">
      <div className="section-heading">
        <div>
          <p className="kicker">Yang kami tangani</p>
          <h2>
            Beragam barang,
            <br />
            <em>satu solusi.</em>
          </h2>
        </div>
        <p className="section-intro">
          Kirimkan foto barang Anda. Kami membantu menilai dan menentukan langkah terbaik untuk
          setiap jenis aset.
        </p>
      </div>
      <div className="gallery-grid">
        {itemGallery.map((item) => (
          <figure className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <small>{item.source}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
