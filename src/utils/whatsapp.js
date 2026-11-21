const WHATSAPP_NUMBER = '6281292533439';

export const WHATSAPP_TEMPLATES = {
  general: `Halo, Saya Ingin Menjual Barang Bekas Saya`,
};

export function whatsappUrl(message = WHATSAPP_TEMPLATES.general) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
