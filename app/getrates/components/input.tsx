interface InputProps {
  placeHolder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  type: "number" | "text" |'email';
  error: string;
  label?: string;
  remarks?: string;
}

const Input: React.FC<InputProps> = ({
  placeHolder,
  handleChange,
  value,
  name,
  type = "text",
  error,
  label,
  remarks,
}) => {
  return (
    <label className="flex flex-col relative">
      {label}
      <input
        id={name}
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        name={name}
        type={type}
        className={`h-10 rounded-md bg-slate-800 border-2 outline-none px-2 font-bold placeholder:font-thin placeholder:text-sm ${
          error ? "border-red-700" : " border-slate-600"
        }`}
      />

      <span
        className={`absolute right-5 top-2 ${
          error ? "text-red-600" : "text-gray-600"
        }`}
      >
        {error ? error : remarks}
      </span>
    </label>
  );
};

export default Input;
