import { Button } from "@/components/ui/button"
import FormInput from "@/components/ui/form-input/FormInput"
import type { ReactNode } from "react"
import { Form, NavLink } from "react-router-dom"

const Filters = ({term, mode}: {term: string | undefined, mode: string}): ReactNode => {
  return (
    <Form className="my-6 py-2 flex flex-col gap-2">
      <FormInput label="Search for" name="term" type="search" defaultValue={term} placeholder="Search" />
      <div className="self-end flex gap-2">
      <Button type="submit" size="lg">Search</Button>
      <Button type="button" variant="outline" size="lg">
        <NavLink to="/news">Reset</NavLink>
      </Button>
      </div>
    </Form>
  )
}

export default Filters