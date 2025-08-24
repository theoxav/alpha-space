import type { NewsResponseWithParams } from '@/utils/types';
import type { ReactNode } from 'react';

const Overview = ({
  results,
}: {
  results: NewsResponseWithParams;
}): ReactNode => {
  const number: number = results.response.count;
  return <div className="my-6 text-xl">{number} matches</div>;
};

export default Overview;
