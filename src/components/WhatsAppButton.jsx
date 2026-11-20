import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function WhatsAppButton({
  children = 'Hubungi kami',
  className = '',
  message = WHATSAPP_TEMPLATES.general,
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
