// Central WhatsApp configuration used across the site
export const WHATSAPP_NUMBER = '919676113883'; // +91 9676113883, in international format (no + or leading 0)

/**
 * Builds a wa.me deep link that opens a chat with the business number,
 * optionally pre-filling a message.
 */
export const getWhatsAppLink = (message?: string): string => {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Opens the WhatsApp chat in a new tab (works for both the WhatsApp app
 * deep-link on mobile and WhatsApp Web on desktop).
 */
export const openWhatsApp = (message?: string): void => {
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
};

/**
 * Reserves a blank browser tab *synchronously*, at the moment of the user's
 * click, so it isn't caught by popup blockers later. Call this immediately
 * inside a form's onSubmit handler, then pass the result to
 * `navigateWhatsAppTab` once any async work (e.g. an API call) finishes.
 */
export const reserveWhatsAppTab = (): Window | null => {
    try {
        return window.open('', '_blank', 'noopener,noreferrer');
    } catch {
        return null;
    }
};

/**
 * Sends a previously-reserved tab (see `reserveWhatsAppTab`) to the WhatsApp
 * chat. Falls back to a fresh window.open if the tab couldn't be reserved
 * (e.g. the browser blocked it outright).
 */
export const navigateWhatsAppTab = (tab: Window | null, message?: string): void => {
    const link = getWhatsAppLink(message);
    if (tab && !tab.closed) {
        tab.location.href = link;
    } else {
        openWhatsApp(message);
    }
};
