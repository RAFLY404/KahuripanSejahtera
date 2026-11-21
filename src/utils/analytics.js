let pageViewTracked = false;

export function trackEvent(eventName, parameters = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
}

export function trackPageView() {
  if (pageViewTracked) return;

  pageViewTracked = true;
  trackEvent('page_view', {
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export function trackWhatsAppClick(location, buttonLabel = 'Hubungi kami') {
  trackEvent('whatsapp_contact_click', {
    button_label: buttonLabel,
    button_location: location,
    destination: 'whatsapp',
  });
}
