import { NewsResponse } from "@/utils/types";
import { ReactNode } from "react";
import NewsCard from "@/components/news/NewsCard.tsx";

const CardsGrid = ({
  objects,
  mode,
}: {
  object: NewsResponse;
  mode: string;
}): ReactNode => {
  return (
    <div className="grid auto-rows-[600px] grid-cols-1 gap-y-4 lg:auto-rows-[300px]">
      {objects.results.map((item, index) => (
        <NewsCard news={item} key={index} />
      ))}
    </div>
  );
};

export default CardsGrid;
