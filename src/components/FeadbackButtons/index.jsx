import styles from "./styles.module.css";

const FeadbackButtons = ({ feadbackVariants, onButtonClick }) => {
  //   console.log(Object.entries(feadbackVariants));
  //   console.log(styles);
  return Object.entries(feadbackVariants).map((element) => {
    return (
      <button
        key={element[0]}
        type="button"
        className={styles.button}
        onClick={() => onButtonClick(element[0])}
      >
        {element[0]}
      </button>
    );
  });
};

export default FeadbackButtons;
