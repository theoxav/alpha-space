import { useLoaderData } from 'react-router-dom';
import type { NewsResponseWithParams } from '@/utils/types';
import CardsGrid from '@/components/ui/cards-grid/CardsGrid';
import Title from '@/components/ui/title/Title';
import Overview from '@/components/ui/overview/Overview';
import { Filters } from '@/components';

const News = () => {
  const data = useLoaderData() as NewsResponseWithParams;
  const { response, params } = data;

  if (!response.results) {
    return <div>Aucune actualité disponible</div>;
  }

  return (
    <section className="section align-element px-8">
      <Title text="All News" />
      <Filters term={params.term} mode="news" key={params.term} />
      <Overview results={data} />
      <CardsGrid objects={response} mode="news-page" />
    </section>
  );
};

export default News;
