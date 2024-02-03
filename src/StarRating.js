import { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>
            <Star
              key={i}
              onRate={() => setRating(i + 1)}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            />
          </span>
        ))}
      </div>
      <p style={textStyle}>
        {tempRating + "/" + maxRating || rating + "/" + maxRating || ""}
      </p>
    </div>
  );
}
const starStyle = {
  width: "28px",
  height: "28px",
  display: "block",
  cursor: "pointer",
};
function Star({ onRate, onHoverIn, onHoverOut, full = false }) {
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <svg viewBox="0 0 20 20">
        <polygon
          points="10,1 12,7.5 19,7.5 13.5,12 15,19 10,14.5 5,19 6.5,12 1,7.5 8,7.5"
          fill={full ? "gold" : "empty"}
        />
      </svg>
    </span>
  );
}
