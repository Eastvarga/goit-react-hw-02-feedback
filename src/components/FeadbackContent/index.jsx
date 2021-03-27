import { Component } from "react";
import FeadBackButtons from "../FeadbackButtons";
import FeadbackStatistics from "../FeadbackStatistics";
import styles from "./styles.module.css";

class FeadbackContent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, elem) => (total += elem), 0);

  countPositiveFeedbackPercentage = () => {
    // console.log(this.countTotalFeedback());
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((100 * Number(this.state.good)) / this.countTotalFeedback());
  };
  // Подумать как оптимизировать функцию, как обойтись без создания объекта.
  hendlerFeadbackIncrement = (keyName) => {
    this.setState((prevState) => {
      const bufer = {};
      bufer[keyName] = prevState[keyName] + 1;
      return bufer;
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Please leave feadback</h2>
        <FeadBackButtons
          feadbackVariants={this.state}
          onButtonClick={this.hendlerFeadbackIncrement}
        />
        <h2 className={styles.title}>Statistics</h2>
        <FeadbackStatistics statisticsData={this.state} />
        <p className={styles.item}>Total: {this.countTotalFeedback()}</p>
        <p className={styles.item}>
          Positive feedback: {this.countPositiveFeedbackPercentage()}&#37;
        </p>
      </div>
    );
  }
}
export default FeadbackContent;
