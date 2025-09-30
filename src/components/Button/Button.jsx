// ? TO DO:
// ? - Add icon support (left/right)
// ? - Add loading state 

// imports 
import "../../styles/settings.css"; // Global variables
import "./Button.css"; // Button-specific styles

/*
 Props:
    * children: The content inside the button (text, icons, etc.)
    * variant: "primary" | "secondary" | "danger" → Button style variant (default: "primary")
    * onClick: function → Click handler
    * disabled: boolean → Disables the button if true
    * className: string → Extra CSS classes for customization
*/
export function Button({
    children,
    variant = "primary",
    onClick,
    disabled = false,
    className = ""
}) {
    // * Map of available style variants
    const variants = {
        primary: "primary",
        secondary: "secondary",
        danger: "danger"
    };

    return (
        <button
            // * Final class list explanation:
            // * "button" → base shared styles
            // * variant (primary/secondary/danger) → variant-specific styles
            // * "disabled" → applied only if `disabled` is true
            // * className → custom classes passed by user
            className={`button ${variants[variant]} ${disabled ? "disabled" : ""} ${className}`}
            onClick={onClick} // * Calls function passed to button
            disabled={disabled} // * Native HTML disabled state for accessibility
        >
            {children} {/* Button content (text, icons, etc.) */}
        </button>
  );
}
