import { staticticItem } from "./styles.module.css";
import { Component } from "react";

class Notification extends Component {
  render() {
    return <h2 className={staticticItem}>{this.props.message}</h2>;
  }
}
export default Notification;
