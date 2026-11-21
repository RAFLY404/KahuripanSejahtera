import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl, WHATSAPP_TEMPLATES } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

export default function WhatsAppButton({
  children = 'Hubungi kami',
  className = '',
  message = WHATSAPP_TEMPLATES.general,
  location = 'unknown',
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={whatsappUrl(message)}
      onClick={() =>
        trackWhatsAppClick(location, typeof children === 'string' ? children : 'Hubungi kami')
      }
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={16} />
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}
