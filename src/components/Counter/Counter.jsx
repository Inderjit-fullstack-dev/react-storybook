import { useState } from "react";
import PropType from "prop-types";
import "./Counter.css";

export default function Counter({ color = "#fff" }) {
  const [count, setCount] = useState(0);

  const handleClick = (eventType) => {
    if (eventType === "INCREMENT") {
      setCount(count + 1);
    }

    if (eventType === "DECREMENT") {
      setCount(count - 1);
    }

    if (eventType === "DEFAULT") {
      setCount(0);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", fontWeight: "bold", color: color }}>
        Counter: {count}
      </div>
      <button
        className="button primary"
        onClick={() => handleClick("DECREMENT")}
      >
        -
      </button>
      &nbsp;
      <button className="button dark" onClick={() => handleClick("DEFAULT")}>
        Default
      </button>
      &nbsp;
      <button
        className="button primary"
        onClick={() => handleClick("INCREMENT")}
      >
        +
      </button>
    </>
  );
}

Counter.propTypes = {
  color: PropType.string,
};
