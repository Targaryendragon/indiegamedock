import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo 区域 */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            GameDevTools
          </span>
        </Link>

        {/* 移动端汉堡菜单按钮 */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block absolute md:relative top-full left-0 w-full md:w-auto 
          bg-white dark:bg-gray-900 md:bg-transparent
          shadow-md md:shadow-none
          md:flex items-center space-y-4 md:space-y-0 md:space-x-6
        `}>
          <div className="flex flex-col md:flex-row items-center py-4 md:py-0 px-4 md:px-0">
            <Link 
              href="/" 
              className="w-full md:w-auto text-center md:text-left py-2 md:py-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              首页
            </Link>
            <Link 
              href="/tools" 
              className="w-full md:w-auto text-center md:text-left py-2 md:py-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              工具库
            </Link>

            {/* 社群按钮 */}
            <Link 
              href="/community" 
              className="ml-0 md:ml-4 mt-2 md:mt-0 w-full md:w-auto text-center 
              bg-blue-500 text-white px-4 py-2 rounded-full 
              hover:bg-blue-600 transition-colors 
              inline-block font-semibold"
            >
              加入社群
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
