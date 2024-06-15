import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./Rating.css";
import { useState, useEffect } from "react";

const Star = ({ selected, handleClick }) => (
  <FaStar
    style={{ color: selected ? "#efc445" : "#ededed", cursor: "pointer" }}
    onClick={handleClick}
  />
);

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default function Rating({
  readOnly = false,
  length = 5,
  value = 0,
  onRatingChange,
}) {
  const [ratingValue, setRatingValue] = useState(value);

  useEffect(() => {
    setRatingValue(value);
  }, [value]);

  const handleClick = (number) => {
    if (!readOnly) {
      setRatingValue(number);
      onRatingChange(number);
    }
  };

  return (
    <div className="rating">
      {Array.from({ length }, (_, index) => (
        <Star
          key={index}
          selected={index < ratingValue}
          handleClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  readOnly: PropTypes.bool,
  length: PropTypes.number,
  value: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};
