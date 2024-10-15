import { NextResponse } from 'next/server';

// 简单中间件示例
export function middleware(req) {
  const url = req.nextUrl; // 使用 Next.js 提供的 nextUrl

  // 自定义逻辑，例如检查路径
  if (url.pathname.startsWith('/protected')) {
    const password = req.headers.get('x-password');
    
    // 进行身份验证
    if (password === '886586') {
      return NextResponse.next();  // 通过验证
    }

    return new Response('Unauthorized', { status: 401 });  // 验证失败
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected*'],  // 指定应用中间件的路径
};
