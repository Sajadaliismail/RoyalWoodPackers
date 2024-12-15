interface SelectInputProps {
  label?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  name: string;
  options: { value: string | number; label: string }[];
  defaultOption?:string
  err?:string
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  handleChange,
  value,
  name,
  options,
  defaultOption='Select an option' ,  
  err
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <span className="mb-2 font-semibold text-slate-200">{label}</span>
      )}
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`h-10 rounded-md bg-slate-800 border-2 outline-none px-2 font-bold placeholder:font-thin placeholder:text-sm  ${
          err ? "border-red-700" : " border-slate-600"
        } focus:ring-2 focus:ring-blue-500 text-slate-300`}
      >
        <option value="" disabled className="text-slate-400">
          {defaultOption}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-slate-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
