import { title, container } from "./styles.module.css";
import { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
  render() {
    return (
      <div className={container}>
        <h2 className={title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

Section.defaultProps = {
  title: "Ops, there must be a title, but it is lost some where",
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
