import Select from "react-select";

export default function InputWithOption({ options, onChange, placeholder }) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#82DBD8" : "white",
      color: "#000",
      cursor: "pointer",
    }),
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #2F8F9D" : "1px solid #9CA3AF",
      "&::after": {
        outline: "2px solid transparent !important",
        outlineOffset: "2px",
        boxShadow:
          "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "--tw-ring-color":
          "rgb(47 143 157 / var(--tw-ring-opacity)) !important",
        "--tw-ring-opacity": "0.5",
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
      options={options}
      styles={customStyles}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable={false}
    />
  );
}
