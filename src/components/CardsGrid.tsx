import { News } from "@/utils/types";
import { ReactNode } from "react";
import NewsPageCard from "@/components/news/NewsPageCard";

const CardsGrid = ({
  objects,
  mode,
}: {
  object: News[];
  mode: string;
}): ReactNode => {
  return (
    <div className="grid auto-rows-[600px] grid-cols-1 gap-y-4 lg:auto-rows-[300px]">
      {objects.map((item, index) => (
        <NewsPageCard news={item} key={index} />
      ))}
    </div>
  );
};

export default CardsGrid;
