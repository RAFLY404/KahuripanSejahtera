export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? 'brand-light' : ''}`}
      href="#top"
      aria-label="Beranda Kahuripan Sejahtera"
    >
      <span className="brand-symbol">K</span>
      <span>
        Kahuripan
        <br />
        <small>Sejahtera</small>
      </span>
    </a>
  );
}
