import React from 'react';
import Layout from '../components/layout-component';

const CommunityPage: React.FC = () => {
  return (
    <Layout 
      title="GameDevTools - 加入游戏开发社区" 
      description="连接全球游戏开发者，分享经验与资源"
    >
      <div className="container mx-auto px-4 py-16">
        {/* 社区介绍 */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            加入游戏开发社区
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            与全球游戏开发者一起学习、分享和成长
          </p>
        </section>

        {/* 社区特色 */}
        <section className="mb-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">交流讨论</h3>
              <p className="text-gray-600 dark:text-gray-300">
                加入我们的Discord社区，与其他开发者讨论游戏设计、开发技巧和行业趋势
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">学习资源</h3>
              <p className="text-gray-600 dark:text-gray-300">
                获取独家教程、工作流程指南和开发技巧，帮助你提升游戏开发技能
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">合作机会</h3>
              <p className="text-gray-600 dark:text-gray-300">
                寻找合作伙伴、测试玩家或招募团队成员，一起将你的游戏创意变为现实
              </p>
            </div>
          </div>
        </section>

        {/* 社区平台 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
            加入我们的社区平台
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
              href="https://discord.gg/gamedevtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              <div className="mr-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
                  <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Discord 社区</h3>
                <p>实时讨论、资源分享和寻找合作伙伴</p>
              </div>
            </a>
            
            <a 
              href="https://twitter.com/gamedevtools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.012 10.012 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Twitter 关注</h3>
                <p>最新工具资讯和独立游戏开发动态</p>
              </div>
            </a>
          </div>
        </section>

        {/* 订阅表单 */}
        <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
            订阅游戏开发资讯
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            获取最新工具更新、教程和独立开发技巧直接发送到您的邮箱
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="您的电子邮箱" 
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              订阅
            </button>
          </form>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">
            我们尊重您的隐私，不会发送垃圾邮件或共享您的信息
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPage;