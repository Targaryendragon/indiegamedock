import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/header-component';
import Footer from '@/components/footer-component';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'GameDevTools - 游戏开发者工具聚合站', 
  description = '为游戏开发者提供最新、最实用的开发工具合集' 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
