import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // 使用 window.location.pathname 获取完整路径（包含 basePath）
    const path = window.location.pathname;
    // 如果是 /docs/modelverse/models/ 下的404页面，重定向到 quick-start
    if (path.startsWith('/docs/modelverse/models/')) {
      router.replace('/modelverse/models/quick-start');
    } else {
      // 其他404情况跳转到介绍页
      router.replace('/overview/platform/introduce');
    }
  }, [router]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404 - 页面未找到</h1>
      <p>正在跳转...</p>
    </div>
  );
}
