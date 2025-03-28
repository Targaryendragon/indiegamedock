import React, { useState, useMemo } from 'react';
import Layout from '../components/layout-component';
import Fuse from 'fuse.js';
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

const ToolsPage: React.FC = () => {
  // 状态管理
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 获取唯一的分类列表
  const categories = useMemo(() => {
    const uniqueCategories = ['全部', ...Array.from(new Set(toolsData.tools.map(tool => tool.category)))];
    return uniqueCategories;
  }, []);

  // Fuse.js 搜索配置
  const fuse = useMemo(() => {
    return new Fuse(toolsData.tools, {
      keys: ['name', 'description', 'tags'],
      threshold: 0.3,
    });
  }, []);

  // 过滤和搜索逻辑
  const filteredTools = useMemo(() => {
    let result = toolsData.tools;

    // 分类筛选
    if (selectedCategory !== '全部') {
      result = result.filter(tool => tool.category === selectedCategory);
    }

    // 搜索逻辑
    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map(result => result.item);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <Layout title="游戏开发工具 - 全部工具" description="游戏开发者工具大全">
      <div className="container mx-auto px-4 py-16">
        {/* 页面标题 */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          游戏开发工具库
        </h1>

        {/* 搜索和筛选区域 */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 搜索输入框 */}
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="搜索工具名称、描述或标签..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 工具列表 */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool: Tool) => (
              <div 
                key={tool.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-12 h-12 mr-4 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{tool.description}</p>
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
                  访问官网
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            没有找到匹配的工具，请尝试其他搜索条件
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ToolsPage;