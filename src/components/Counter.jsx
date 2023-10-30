/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import WithLogging from "./hoc/WithLogging";
import PropTypes from "prop-types";

const Counter = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click by {data.name}!! : {count}
    </button>
  );
};

Counter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default WithLogging(Counter);
