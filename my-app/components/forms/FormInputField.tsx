import { FieldValues, Path, useFormContext } from "react-hook-form";

interface FormInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: "text" | "email" | "date" | "mm-yy";
  disabled?: boolean;
  isDate?: boolean;
}

export default function FormInputField<T extends FieldValues>({
  name,
  label,
  required = true,
  placeholder,
  type = "text",
  disabled = false,
  isDate = false,
}: FormInputFieldProps<T>) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { onChange, ...rest } = register(name, {
    required: required ? `${label} is required.` : "",
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length >= 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setValue(name, value as any);
    onChange(e);
  };

  return (
    <div>
      <label className="text-sm cursor-default text-gray-400">{label}</label>
      <input
        id={name}
        type={type}
        className={`input w-full rounded-lg mt-1 ${errors[name] ? "input-error" : ""}`}
        placeholder={placeholder}
        onChange={isDate ? handleDateChange : onChange}
        {...rest}
        disabled={disabled}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  )
};