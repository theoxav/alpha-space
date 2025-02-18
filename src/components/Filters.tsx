import { ReactNode } from "react";
import { Form, Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import FormInput from "@/components/forms/FormInput.tsx";

const Filters = ({
  term,
  mode,
}: {
  term: string | undefined;
  mode: string;
}): ReactNode => {
  return (
    <Form className="my-6 flex flex-col gap-2 py-2">
      <FormInput
        type="search"
        label="search for"
        name="term"
        defaultValue={term}
        placeHolder="search"
      />
      <div className="gap-2 self-end">
        <Button type="sumbit" size="lg">
          Search
        </Button>
        <Button type="button" variant="outline" size="lg">
          <Link to="/news">Reset</Link>
        </Button>
      </div>
    </Form>
  );
};

export default Filters;
