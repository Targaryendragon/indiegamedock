import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* 网站 Logo 和描述 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            GameDevTools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            为游戏开发者提供最前沿的工具资源和创新灵感，连接全球游戏开发社群，
            赋能独立开发者实现梦想。
          </p>
        </div>

        {/* 联系方式 */}
        <div className="mb-6">
          <Link 
            href="mailto:contact@gamedevtools.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            联系我们 | contact@gamedevtools.com
          </Link>
        </div>

        {/* 社交链接（可选） */}
        <div className="flex justify-center space-x-4 mb-6">
          <a 
            href="https://twitter.com/gamedevtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Twitter
          </a>
          <a 
            href="https://discord.gg/gamedevtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Discord
          </a>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GameDevTools. 保留所有权利。
          </p>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy" className="hover:underline mr-4">隐私政策</Link>
            <Link href="/terms" className="hover:underline">使用条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
