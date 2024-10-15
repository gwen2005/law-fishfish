const { NextResponse } = require('next/server');

function middleware(req) {
  const url = req.nextUrl;

  const password = req.headers['x-password'];

  if (password === '886586') {
    return NextResponse.next();
  }

  return new Response('Invalid Password', { status: 401 });
}

module.exports = { middleware };
