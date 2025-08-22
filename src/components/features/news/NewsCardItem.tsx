import type { News } from '@/utils/types';
import { CircleArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NewsCardItem = ({ item }: { item: News }) => {
  const { url, image_url, title, summary, published_at, news_site } = item;

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 mx-auto my-4 max-w-2xl lg:mx-4">
      {/* Image - au-dessus sur mobile, à gauche sur desktop */}
      <div className="lg:w-1/2">
        <NavLink to={url} target="_blank">
          <img 
            src={image_url} 
            alt={title} 
            className="w-full h-[200px] lg:h-[300px] object-cover" 
          />
        </NavLink>
      </div>
      
      {/* Contenu texte - en dessous sur mobile, à droite sur desktop */}
      <div className="lg:w-1/2 flex flex-col h-full">
        <div className="space-y-3 flex-1">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{published_at.split('T')[0]}</span>
            <span>•</span>
            <span>{news_site}</span>
          </div>
          
          <p className="text-gray-700 line-clamp-3">{summary}</p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 lg:mb-6">
          <span className="text-sm text-gray-600">Read from source</span>
          <NavLink to={url} target="_blank">
            <CircleArrowRight className="text-purple-600 hover:scale-150 transition-all duration-300" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewsCardItem;
