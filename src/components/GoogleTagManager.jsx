import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

const CONTAINER_ID = import.meta.env.VITE_GOOGLE_TAG_ID || 'GTM-M2WC6WXD';

export default function GoogleTagManager() {
  useEffect(() => {
    if (document.querySelector('[data-google-tag]')) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    trackPageView();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(CONTAINER_ID)}`;
    script.dataset.googleTag = 'true';
    document.head.appendChild(script);
  }, []);

  return null;
}
