import "./Badges.css"

export function Badges({variant = "primary", children, className = "", style = {}, outlined = false}) {
    // * available style variants
    // * primary
    // * success
    // * warning
    // * danger
    // * info 
  return (
    <div className={`badge badge-${variant} ${className} ${outlined ? "badge-outlined" : ""}`} style={style}>
      {children}
    </div>
  )
}

