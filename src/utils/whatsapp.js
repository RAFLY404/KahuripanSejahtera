const WHATSAPP_NUMBER = '6281234567890';

export function whatsappUrl(message = 'Halo Kahuripan Sejahtera!') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
