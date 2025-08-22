import NewsCardItem from '@/components/features/news/NewsCardItem';
import type { News } from '@/utils/types';
import type { ReactNode } from 'react';

const CardsGrid = ({
  results,
}: {
  results: News[];
}): ReactNode => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {results.map((item, index) => (
        <NewsCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardsGrid;
