import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  defaultValue: string | undefined;
  placeHolder: string;
};

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeHolder,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xl capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue ? defaultValue : ""}
        placeholder={placeHolder}
      ></Input>
    </div>
  );
};

export default FormInput;
