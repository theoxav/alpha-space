import type { NewsResponse } from "@/utils/types"
import type { ReactNode } from "react"

const Overview = ({ results} : { results: NewsResponse}): ReactNode => {
  const number: number = results.count;
  return (
    <div className="my-6 text-xl">{number} matches</div>
  )
}

export default Overview