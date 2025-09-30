import "../../styles/settings.css"; // Global theme variables
import "./Card.css"; // Card-specific styles

/*  
Props:
  * children: ReactNode → Content inside the card
  * variant: "default" | "outlined" | "shadow" → Different card styles (default: "default")
  * className: string → Extra CSS classes for customization
*/
export function Card({ children, variant = "shadow", className = "" }) {
  const variants = {
    default: "card-default",
    shadow: "card-shadow"
    // ? TO DO: add more variants later
  };

  return (
    <div className={`card ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
