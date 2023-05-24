import Select from "react-select";

export default function InputWithOption({
  options,
  onChange,
  placeholder,
  value,
}) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#82DBD8" : "white",
      color: "#000",
      cursor: "pointer",
    }),
    control: (provided, state) => ({
      ...provided,
      // border: "1px solid #9CA3AF",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(47, 143, 157, 0.5)" : 0,
      borderColor: state.isFocused ? "#2F8F9D" : "#9CA3AF",
      "&:hover": {
        borderColor: state.isFocused ? "#2F8F9D" : "#9CA3AF",
      },
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderRadius: "5px",
      boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.15)",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0.5rem",
    }),
  };

  return (
    <Select
      defaultValue={value}
      options={options}
      styles={customStyles}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable={false}
    />
  );
}
