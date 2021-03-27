import styles from "./styles.module.css";
const FeadbackStatistics = ({ statisticsData }) => {
  //   console.log(Object.entries(statisticsData));
  return (
    <ul className={styles.staticticList}>
      {Object.entries(statisticsData).map((element) => (
          <li key={element[0]} className={styles.staticticItem}>
          {element[0]}: {element[1]}
        </li>
      ))}
    </ul>
  );
};

export default FeadbackStatistics;
