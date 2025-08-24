import NewsCardItem from '@/components/features/news/NewsCardItem';
import type { NewsResponse } from '@/utils/types';
import type { ReactNode } from 'react';

const CardsGrid = ({
  objects,
  mode,
}: {
  objects: NewsResponse;
  mode: string;
}): ReactNode => {
  console.log(mode);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {objects.results.map((item, index) => (
        <NewsCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardsGrid;
