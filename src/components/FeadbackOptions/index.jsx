import { button } from "./styles.module.css";

const FeadbackOptions = ({ options, onLeaveFeedback }) => {
  //   console.log(Object.entries(options));
  //   console.log(styles);
  return Object.entries(options).map((element) => {
    return (
      <button
        key={element[0]}
        type="button"
        className={button}
        onClick={() => onLeaveFeedback(element[0])}
      >
        {element[0]}
      </button>
    );
  });
};

export default FeadbackOptions;
