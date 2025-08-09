import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }
  const formId = process.env.FORMSPARK_FORM_ID;
  if (formId) {
    try {
      await fetch(`https://submit-form.com/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      return NextResponse.json({ ok: true });
    } catch (e) {
      return NextResponse.json({ ok: false, error: 'Submit failed' }, { status: 500 });
    }
  }
  console.log('Contact form (dev):', body);
  return NextResponse.json({ ok: true });
}
