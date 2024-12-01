interface RadioButtonProps {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  options: { value: string; label: string }[];
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  handleChange,
  value,
  name,
  options,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <span className="mb-2 font-semibold text-slate-200">{label}</span>
      )}
      <div className="space-x-4 flex flex-row">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              className={`h-5 w-5 rounded-full border-2 bg-slate-800 text-slate-300 outline-none  focus:ring-0 `}
            />
            <span className="text-slate-200">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
