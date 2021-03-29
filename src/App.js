import { Component } from "react";
import FeadbackOptions from "./components/FeadbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
// import FeadbackContent from "./components/FeadbackContent";

class App extends Component {
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
  hendlerFeadbackIncrement = (keyName) => {
    this.setState((prevState) => {
      // const bufer = {};
      // bufer[keyName] = prevState[keyName] + 1;
      // return bufer;

      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Section title="Please leave feadback">
          <FeadbackOptions
            options={this.state}
            onLeaveFeedback={this.hendlerFeadbackIncrement}
          />
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              statisticsData={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <FeadbackContent />
//     </div>
//   );
// }

export default App;
