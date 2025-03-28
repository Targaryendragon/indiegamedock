import React from 'react';

// 定义工具类型接口
interface ToolCardProps {
  name: string;
  description: string;
  tags: string[];
  url: string;
  icon: string;
  category: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  name, 
  description, 
  tags, 
  url, 
  icon, 
  category 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* 头部区域：图标、名称和分类 */}
      <div className="flex items-center mb-4">
        <img 
          src={icon} 
          alt={`${name} 图标`} 
          className="w-12 h-12 mr-4 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* 描述 */}
      <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
        {description}
      </p>

      {/* 标签区域 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 访问按钮 */}
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        访问工具
      </a>
    </div>
  );
};

export default ToolCard;
