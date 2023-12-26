import React from "react";
import { useState } from "react";

const StarRating = ({
  maxLen = 5,
  color = "gold",
  width = 30,
  height = 30,
  onClick = () => {},
  rate,
}) => {
  const [tempRate, setTempRate] = useState(0);

  return (
    <div className="flex gap-2">
      {Array.from({ length: maxLen }, (_, i) => (
        <div
          key={i}
          className="cursor-pointer"
          onClick={() => onClick(i + 1)}
          onMouseEnter={() => setTempRate(i + 1)}
          onMouseLeave={() => setTempRate(null)}
        >
          {(tempRate ? tempRate >= i + 1 : rate >= i + 1) ? (
            <svg
              width={width}
              height={height}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1l2.76 8.5H22l-7 5.12 2.74 8.38L12 17.27l-5.74 4.73L7 14.62 0 9.5h7.24L12 1z"
                fill={color}
              />
            </svg>
          ) : (
            <svg
              width={width}
              height={height}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1l2.76 8.5H22l-7 5.12 2.74 8.38L12 17.27l-5.74 4.73L7 14.62 0 9.5h7.24L12 1z"
                fill="none"
                stroke={color}
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
      ))}
      <div>{tempRate || rate || ""}</div>
    </div>
  );
};

export default StarRating;
