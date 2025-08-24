import { snapiCustomFetch } from "@/utils/customFetch";
import type {
  FiltersParamS,
  NewsResponse,
  NewsResponseWithParams,
} from '@/utils/types';
import type { LoaderFunction } from 'react-router-dom';

const newsParams = {
  news_site_exclude: 'SpacePolicyOnline.com',
  limit: 20,
  order: 'published_at',
};

export const newsPageLoader: LoaderFunction = async ({
  request,
}): Promise<NewsResponseWithParams | null> => {
  try {
    const params: FiltersParamS = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const formattedParams = {
      search: params.term ? params.term : '',
      ...newsParams,
    };
    const response = await snapiCustomFetch.get<NewsResponse>('', {
      params: formattedParams,
    });

    return { response: response.data, params };
  } catch (error) {
    console.error(error);
    return null;
  }
};