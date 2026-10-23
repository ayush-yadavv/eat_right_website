import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

const INDEXNOW_KEY = '24c82b4a37f54c25a1e2f75988e0db96';
const KEY_LOCATION = `${siteConfig.url}/${INDEXNOW_KEY}.txt`;

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const secret = process.env.INDEXNOW_SECRET;

    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const host = new URL(siteConfig.url).host;

    const urlList: string[] = Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : [
          siteConfig.url,
          `${siteConfig.url}/delete-account`,
          `${siteConfig.url}/legal/privacy-policy`,
          `${siteConfig.url}/legal/terms-of-use`,
        ];

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'IndexNow submission failed', details: errorText },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      submittedUrls: urlList,
      status: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'IndexNow enabled',
    host: new URL(siteConfig.url).host,
    keyLocation: KEY_LOCATION,
  });
}
