import "./Avatar.css"

export function Avatar({ src, alt, style, w, h , r}) {
  return (
    <img
        className="avatar"
        src={src}
        alt={alt}
        style={{ width: w, height: h, borderRadius: r, ...style }}
    />
  )
}
