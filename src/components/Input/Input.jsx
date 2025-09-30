// ? TO DO:
// ? - Add icon support (left/right)


import "../../styles/settings.css"; // Global variables
import "./Input.css" // Input-specific styles

export function Input({
    type,
    placeholder = "",
    value,
    name = "input",
    onChange = () => {},
    disabled = false,
    className = "",
    error = false,
    success = false
}) {
  return (
      <input className={`input ${className} ${error ? "error" : ""} ${success ? "success" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
  )
}
