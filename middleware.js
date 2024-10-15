import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;

  // 示例：获取请求中的自定义 Header
  const password = req.headers.get('x-password');

  // 检查密码是否匹配
  if (password === '886586') {
    return NextResponse.next(); // 继续处理请求
  }

  // 如果密码不匹配，返回 401 Unauthorized 响应
  return new Response('Invalid Password', { status: 401 });
}

export const config = {
  matcher: ['/protected/*'], // 你可以指定匹配路径
};
