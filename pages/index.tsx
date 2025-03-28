import React from 'react';
import Layout from '../components/layout-component';
import toolsData from '../data/tools.json';

// 定义工具类型
interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  icon: string;
}

const HomePage: React.FC = () => {
  // 选取前6个工具
  const featuredTools = toolsData.tools.slice(0, 6);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero 标题区 */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            游戏开发工具集中营
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            连接游戏开发者与创新工具，赋能独立开发者实现梦想
          </p>
        </section>

        {/* 介绍段落 */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            无论你是资深策划、专业美术、资深程序，还是怀揣游戏梦想的独立开发者，
            我们都致力于为你提供最前沿、最实用的开发工具。在这里，打破技能壁垒，
            降低开发门槛，让每一个创意都有机会绽放。
          </p>
        </section>

        {/* 推荐工具卡片区 */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
            精选工具推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool: Tool) => (
              <div 
                key={tool.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-12 h-12 mr-4 rounded-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  了解详情
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;