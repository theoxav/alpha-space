export type News = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: string[];
  events: string[];
};

export type NewsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: News[];
};

export type NewsResponseWithParams = {
  response: NewsResponse;
  params: FiltersParamS;
};

export type FiltersParamS = {
  term?: string;
  mode?: string;
};
