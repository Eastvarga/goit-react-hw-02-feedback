import { staticticList, staticticItem } from "./styles.module.css";
import PropTypes from "prop-types";

const Statistics = ({ statisticsData, total, positivePercentage }) => {
  //   console.log(Object.entries(statisticsData));
  return (
    <ul className={staticticList}>
      {Object.entries(statisticsData).map((element) => (
        <li key={element[0]} className={staticticItem}>
          {element[0]}: {element[1]}
        </li>
      ))}
      <li className={staticticItem}>Total: {total()}</li>
      <li className={staticticItem}>
        {" "}
        Positive feedback: {positivePercentage()}&#37;
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
