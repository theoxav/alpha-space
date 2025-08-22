import { useLoaderData } from 'react-router-dom';
import type { NewsResponse } from '@/utils/types';
import CardsGrid from '@/components/ui/cards-grid/CardsGrid';
import Title from '@/components/ui/title/Title';
import Overview from '@/components/ui/overview/Overview';

const News = () => {
  const data = useLoaderData() as NewsResponse;
  const { results } = data;

  if (!results) {
    return <div>Aucune actualité disponible</div>;
  }

  return (
    <section className="section">
      <Title text="All News" />
      <Overview results={data} />
      <CardsGrid results={results} mode="news-page" />
    </section>
  );
};

export default News;
