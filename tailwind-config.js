/** @type {import('tailwindcss').Config} */
module.exports = {
  // 启用 JIT 模式，现在已默认启用
  mode: 'jit',
  // 深色模式配置，使用 class 模式而非 media 查询
  darkMode: 'class',
  // 内容路径配置
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 扩展或覆盖 Tailwind 默认主题
      colors: {
        // 主色调
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // 次要色调
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // 可以添加更多自定义颜色
      },
      // 字体配置
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // 动画配置
      animation: {
        // 可以添加自定义动画
      },
    },
  },
  plugins: [
    // 可以添加插件
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
