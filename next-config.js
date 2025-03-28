/** @type {import('next').NextConfig} */
const nextConfig = {
  // React 严格模式
  reactStrictMode: true,

  // 国际化配置
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  },

  // 图片优化配置
  images: {
    domains: [
      // 允许的图片域名，例如：
      'example.com',
      'cdn.yoursite.com',
      'res.cloudinary.com', // 如果使用 Cloudinary
      'images.unsplash.com', // 如果使用 Unsplash
      'placehold.co', // 占位图片服务
    ],
  },

  // 自定义 Webpack 配置（可选）
  webpack: (config, { isServer }) => {
    // 在这里可以添加自定义 Webpack 配置
    return config;
  },

  // 重写和重定向配置
  async rewrites() {
    return [
      // 可以添加自定义路由重写
    ];
  },

  // 安全头配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;