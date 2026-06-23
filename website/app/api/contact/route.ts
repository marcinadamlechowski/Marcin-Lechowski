import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL;

export async function POST(request: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json({ error: 'Webhook nie jest skonfigurowany.' }, { status: 500 });
  }

  const data = await request.json();
  const { name, phone, problem, preferredDate } = data || {};

  if (!name || !phone) {
    return NextResponse.json({ error: 'Imię i numer telefonu są wymagane.' }, { status: 400 });
  }

  const payload = {
    text: `Nowe zgłoszenie z formularza kontaktowego:\n\nImię: ${name}\nTelefon: ${phone}\nTermin: ${preferredDate || 'nie podano'}\nProblem: ${problem || 'nie podano'}`
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const body = await response.text();
      console.error('Webhook failed:', response.status, body);
      return NextResponse.json({ error: 'Nie udało się wysłać zgłoszenia. Spróbuj ponownie później.' }, { status: 502 });
    }

    if (RECIPIENT_EMAIL) {
      // Optional: add email notification data for a future integration
      console.log(`Notification email would be sent to ${RECIPIENT_EMAIL}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Błąd serwera podczas wysyłania zgłoszenia.' }, { status: 500 });
  }
}
