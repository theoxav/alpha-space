import { NewsResponseWithParams } from "@/utils/types.ts";
import { ReactNode } from "react";

const Overview = ({
  objects,
}: {
  objects: NewsResponseWithParams;
}): ReactNode => {
  const number: number = objects.response.count;
  return <div className="my-6 text-2xl">{number} matches</div>;
};

export default Overview;
