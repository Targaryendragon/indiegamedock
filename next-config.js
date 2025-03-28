/** @type {import('next').NextConfig} */
const nextConfig = {
  // React 严格模式
  reactStrictMode: true,

  // 国际化配置
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  },

  // 自定义 Webpack 配置（可选）
  webpack: (config, { isServer }) => {
    // 在这里可以添加自定义 Webpack 配置
    // 例如：处理特殊的模块加载、性能优化等
    return config;
  },

  // 图片优化配置
  images: {
    domains: [
      // 允许的图片域名，例如：
      // 'example.com',
      // 'cdn.yoursite.com'
    ],
  },

  // 性能和构建优化预留
  optimizations: {
    // 可以在这里添加性能相关配置
  },

  // 重写和重定向配置
  async rewrites() {
    return [
      // 可以添加自定义路由重写
    ];
  },

  // 环境变量配置
  env: {
    // 可以添加全局可用的环境变量
    // NEXT_PUBLIC_SOME_KEY: process.env.SOME_KEY,
  },

  // 编译时配置
  experimental: {
    // 可以启用一些实验性功能
    // serverActions: true,
  },

  // 安全头配置
  headers: async () => {
    return [
      // 可以添加自定义安全头
    ];
  },
};

module.exports = nextConfig;
