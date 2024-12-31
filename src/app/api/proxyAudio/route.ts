import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new NextResponse('File not found', { status: 404 });
    }

    return new NextResponse(response.body, {
      headers: {
        'Content-Type': response.headers.get('content-type') || 'audio/ogg',
        'Content-Disposition': 'inline',
      },
    });
  } catch (error) {
    console.error('Error fetching audio:', error);
    return NextResponse.json({ error: 'Failed to fetch audio' }, { status: 500 });
  }
}
