// GCB's WhatsApp number, in international format without "+" or spaces
export const WHATSAPP_NUMBER = '233275286178'

// Web3Forms access key (https://web3forms.com). Submissions are emailed to the address the key
// was created with. Leave empty until GCB has a key: forms then fall back to WhatsApp.
// The key is designed to be public, so it is safe to keep in the site's code.
export const WEB3FORMS_ACCESS_KEY = ''

export const emailEnabled = WEB3FORMS_ACCESS_KEY !== ''

export function whatsappLink(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

// Turns { Name: 'Ama', Phone: '' } into "Name: Ama", skipping empty values
export function formatFields(fields) {
  return Object.entries(fields)
    .filter(([, value]) => value && String(value).trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`)
    .join('\n')
}

/**
 * Sends a form by email when a Web3Forms key is set, otherwise opens WhatsApp with the
 * message typed out. Returns 'email' or 'whatsapp' so the caller can show the right message.
 * The WhatsApp branch must not await anything first, or browsers block the new tab.
 */
export async function submitForm({ subject, fields, whatsappText }) {
  if (!emailEnabled) {
    window.open(whatsappLink(whatsappText), '_blank', 'noopener')
    return 'whatsapp'
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: 'GCB Website',
      ...fields,
    }),
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'The message could not be sent.')
  }
  return 'email'
}
