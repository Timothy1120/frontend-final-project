export default function Input({
  label,
  inputName,
  inputFor,
  inputId,
  inputType,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <div>
      <label htmlFor={inputFor} className="block font-semibold mb-2">
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 ${className}`}
      />
    </div>
  );
}
