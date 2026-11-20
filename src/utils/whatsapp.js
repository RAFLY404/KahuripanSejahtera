const WHATSAPP_NUMBER = '6281234567890';

export const WHATSAPP_TEMPLATES = {
  general: `Halo Kahuripan Sejahtera,

Saya ingin bertanya tentang layanan barang bekas.

Nama:
Keperluan:
Lokasi:

Terima kasih.`,
  sell: `Halo Kahuripan Sejahtera,

Saya ingin menjual barang bekas.

Nama:
Jenis barang:
Jumlah barang:
Lokasi:
Kondisi barang:

Foto barang akan saya kirim setelah pesan ini.
Terima kasih.`,
};

export function whatsappUrl(message = WHATSAPP_TEMPLATES.general) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
