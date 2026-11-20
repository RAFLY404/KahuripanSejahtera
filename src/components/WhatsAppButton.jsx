import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../utils/whatsapp';

const DEFAULT_MESSAGE =
  'Halo Kahuripan Sejahtera, saya ingin bertanya tentang layanan barang bekas.';

export default function WhatsAppButton({
  children = 'Hubungi kami',
  className = '',
  message = DEFAULT_MESSAGE,
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={16} />
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}
