import React from 'react';
import Layout from '../components/layout-component';

export default function Custom404() {
  return (
    <Layout title="404 - 页面未找到">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - 页面未找到</h1>
        <p className="mb-8">您正在寻找的页面不存在或已被移动。</p>
        <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          返回首页
        </a>
      </div>
    </Layout>
  );
}