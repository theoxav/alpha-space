import { useLoaderData } from 'react-router-dom';
import type { NewsResponse } from '@/utils/types';
import CardsGrid from '@/components/ui/cards-grid/CardsGrid';

const News = () => {
  const { results } = useLoaderData() as NewsResponse;

  if (!results) {
    return <div>Aucune actualité disponible</div>;
  }

  return (
    <section className="section">
      <CardsGrid results={results} mode="news-page" />
    </section>
  );
};

export default News;
