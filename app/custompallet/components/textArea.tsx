interface InputProps {
  placeHolder: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
  name: string;
  type?: "number" | "text";
  error: string;
  label?: string;
}

const TextArea: React.FC<InputProps> = ({
  placeHolder,
  handleChange,
  value,
  name,
  error,
  label,
}) => {
  return (
    <label className="flex flex-col relative">
      {label}
      <textarea
        id={name}
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        rows={5}
        maxLength={500}
        name={name}
        style={{ resize: "none" }}
        className={` rounded-md bg-slate-800 border-2 outline-none px-2 font-bold placeholder:font-thin placeholder:text-sm ${
          error ? "border-red-700" : " border-slate-600"
        }`}
      />
    </label>
  );
};

export default TextArea;
