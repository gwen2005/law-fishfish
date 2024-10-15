import { NextResponse } from 'next/server';

export function middleware(req) {
  // 设定用户名和密码
  const username = 'chenfeiyan';
  const password = '886586';

  // 生成 `Basic` 认证的授权头
  const basicAuth = req.headers.get('authorization');
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pass] = atob(authValue).split(':');

    // 检查用户提供的用户名和密码是否匹配
    if (user === username && pass === password) {
      return NextResponse.next();
    }
  }

  // 如果未通过认证，返回 401 Unauthorized 响应，并请求输入用户名和密码
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
