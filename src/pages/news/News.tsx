import { useLoaderData } from 'react-router-dom';
import type { NewsResponse } from '@/utils/types';

const News = () => {
  const { results } = useLoaderData() as NewsResponse;

  if (!results) {
    return <div>Aucune actualité disponible</div>;
  }

  return <div></div>;
};

export default News;
