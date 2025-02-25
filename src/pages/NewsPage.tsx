import CardsGrid from "@/components/CardsGrid";
import { snapiCustomFetch } from "@/utils/customFetch";
import {
  FiltersParams,
  NewsResponse,
  NewsResponseWithParams,
} from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import Title from "@/components/news/components/Title.tsx";
import Overview from "@/components/news/components/Overview.tsx";
import Filters from "@/components/Filters.tsx";

const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at",
};

export const newsPageLoader: LoaderFunction = async ({
  request,
}): Promise<NewsResponseWithParams | null> => {
  try {
    const params: FiltersParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const formattedParams = {
      search: params.term ? params.term : "",
      ...newsParams,
    };
    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams,
    });
    return { response: response.data, params };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const NewsPage = () => {
  const data = useLoaderData() as NewsResponseWithParams;
  const { response, params } = data;

  return (
    <section className="section">
      <Title text="All news" />
      <Filters term={params.term} mode="news" key={params.term} />
      <Overview objects={data} />
      <CardsGrid objects={response} mode="news-page" />
    </section>
  );
};

export default NewsPage;
