import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/global-css-styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  // 检测暗黑模式偏好
  useEffect(() => {
    // 只在客户端执行
    if (typeof window !== 'undefined') {
      // 检查本地存储中的主题设置
      const savedTheme = localStorage.getItem('theme');
      
      // 如果用户之前设置了主题，应用它
      if (savedTheme) {
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } 
      // 否则，检查系统偏好
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;