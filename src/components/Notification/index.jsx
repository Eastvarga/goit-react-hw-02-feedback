import { staticticItem } from "./styles.module.css";
import { Component } from "react";
import PropTypes from "prop-types";
class Notification extends Component {
  render() {
    return <h2 className={staticticItem}>{this.props.message}</h2>;
  }
}

Notification.defaultProps = {
  message: "Ops, there must be a message, but it is lost some where",
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
